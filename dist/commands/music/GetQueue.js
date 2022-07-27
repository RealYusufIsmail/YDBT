"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQueue = void 0;
const discord_js_1 = require("discord.js");
exports.GetQueue = {
    name: 'queue',
    description: 'Gets the current queue',
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction, player) => {
        const guild = interaction.guild;
        if (guild == null) {
            await interaction.reply('You must be in a guild to use this command');
            return;
        }
        let guildQueue = player.getQueue(guild.id);
        if (guildQueue == null) {
            await interaction.reply('There is no songs in the queue');
            return;
        }
        const embed = new discord_js_1.EmbedBuilder()
            .setTitle('Queue')
            .addFields(guildQueue.songs.map((song, index) => {
            return {
                name: `${index + 1}. ${song.name}` + ' by ' + ` ${song.author}`,
                value: `${song.url}` + '\n' + `${song.duration}`
            };
        }))
            .setColor(discord_js_1.Colors.Aqua)
            .setTimestamp();
        await interaction.reply({ embeds: [embed] });
    }
};
