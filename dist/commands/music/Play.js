"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.Play = void 0;
const discord_js_1 = require("discord.js");
exports.Play = {
    name: "play",
    description: "Plays a song",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "song",
            description: "The song to play",
            type: discord_js_1.ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client, interaction, player) => {
        const guild = interaction.guild;
        const member = interaction.member;
        const songOption = interaction.isChatInputCommand() ? interaction.options.getString("song") : null;
        if (songOption == null) {
            await interaction.reply("Please specify a song to play");
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
        if (!songOption.includes("https://www.youtube.com/watch?v=")) {
            await interaction.reply("Please specify a youtube song");
            return;
        }
        let guildQueue = player.getQueue(guild.id);
        let queue = player.createQueue(interaction.guild.id);
        await queue.join(member.voice.channel);
        let song = await queue.play(songOption).then(() => {
            interaction.reply("Playing song");
        }).catch(async (error) => {
            await interaction.reply(`Error playing song: ${error}`);
            if (!guildQueue)
                queue.stop();
        });
    }
};
