"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayList = void 0;
const discord_js_1 = require("discord.js");
exports.PlayList = {
    name: "playlist",
    description: "Plays a playlist",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "playlist",
            description: "The playlist to play",
            type: discord_js_1.ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client, interaction, player) => {
        const guild = interaction.guild;
        const member = interaction.member;
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
        if (!playlistOption.includes("https://www.youtube.com/playlist?list=")) {
            await interaction.reply("Please specify a youtube playlist");
            return;
        }
        let queue = player.createQueue(guild.id);
        await queue.join(member.voice.channel);
        let song = await queue.playlist(playlistOption).then(() => {
            interaction.reply("Playing playlist");
        }).catch(async (error) => {
            await interaction.reply(`Error playing playlist: ${error}`);
            queue.stop();
        });
    }
};
