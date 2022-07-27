"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongProgress = void 0;
const discord_js_1 = require("discord.js");
exports.SongProgress = {
    name: 'song_progress',
    description: 'Shows the current song progress',
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction, player) => {
        const guild = interaction.guild;
        if (guild == null) {
            await interaction.reply('You must be in a guild to use this command');
            return;
        }
        let guildQueue = player.getQueue(guild.id);
        if (guildQueue == null) {
            await interaction.reply('There is no song to show progress for');
            return;
        }
        const ProgressBar = guildQueue.createProgressBar();
        const embed = new discord_js_1.EmbedBuilder()
            .setTitle('Song Progress')
            .setDescription(ProgressBar.prettier)
            .setColor(discord_js_1.Colors.Aqua);
        await interaction.reply({ embeds: [embed] });
    }
};
