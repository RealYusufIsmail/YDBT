"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearQueue = void 0;
const discord_js_1 = require("discord.js");
exports.ClearQueue = {
    name: 'clear_queue',
    description: 'Clears the current queue',
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction, player) => {
        const guild = interaction.guild;
        if (guild == null) {
            await interaction.reply('You must be in a guild to use this command');
            return;
        }
        let guildQueue = player.getQueue(guild.id);
        if (guildQueue == null) {
            await interaction.reply('There is no queue to clear');
            return;
        }
        await guildQueue.clearQueue();
        await interaction.reply('Cleared queue');
    }
};
