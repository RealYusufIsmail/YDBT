"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NowPlaying = void 0;
const discord_js_1 = require("discord.js");
exports.NowPlaying = {
    name: 'now_playing',
    description: 'Shows the current song',
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction, player) => {
        const guild = interaction.guild;
        if (guild == null) {
            await interaction.reply('You must be in a guild to use this command');
            return;
        }
        let guildQueue = player.getQueue(guild.id);
        if (guildQueue == null) {
            await interaction.reply('You are not playing any songs');
            return;
        }
        const currentSong = guildQueue.nowPlaying();
        const embed = new discord_js_1.EmbedBuilder()
            .setTitle('Now Playing')
            .setDescription(`${currentSong.title} - ${currentSong.author}`)
            .setThumbnail(currentSong.thumbnail)
            .setURL(currentSong.url)
            .setColor(discord_js_1.Colors.Aqua);
        await interaction.reply({ embeds: [embed] });
    }
};
