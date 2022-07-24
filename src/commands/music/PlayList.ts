import {ISlashCommand} from "../../handle/command/ISlashCommand";
import {ApplicationCommandOptionType, ApplicationCommandType, GuildChannelResolvable, GuildMember} from "discord.js";

export const PlayList: ISlashCommand = {
    name : "playlist",
    description : "Plays a playlist",
    type : ApplicationCommandType.ChatInput,
    options : [
        {
            name : "playlist",
            description : "The playlist to play",
            type : ApplicationCommandOptionType.String,
            required : true
        }
    ],

    run : async (client, interaction, player) => {
        const guild = interaction.guild;
        const member = interaction.member as GuildMember;
        const playlistOption = interaction.isChatInputCommand() ? interaction.options.getString("playlist") : null;

        if (playlistOption == null) {
            await interaction.reply("Please specify a playlist to play");
            return;
        }

        if (guild == null) {
            await interaction.reply("You must be in a guild to use this command");
            return;
        }

        if (member == null) {
            await interaction.reply("You must be in a guild to use this command");
            return;
        }

        if (member.voice.channel == null) {
            await interaction.reply("You must be in a voice channel to use this command");
            return;
        }

        //check if the playlist is a youtube playlist
        if(!playlistOption.includes("https://www.youtube.com/playlist?list=")){
            await interaction.reply("Please specify a youtube playlist");
            return;
        }

        let guildQueue = player.getQueue(guild.id);
        let queue = player.createQueue(guild.id);
        await queue.join(member.voice.channel as GuildChannelResolvable);
        let song = await queue.playlist(playlistOption).then(() => {
            interaction.reply("Playing playlist");
        } ).catch(async (error) => {
            await interaction.reply(`Error playing playlist: ${error}`);
            if(!guildQueue)
                queue.stop();
        });
    }
}