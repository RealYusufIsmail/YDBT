"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop = void 0;
const discord_js_1 = require("discord.js");
exports.Stop = {
    name: 'stop',
    description: 'Stops the current song',
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction, player) => {
        const guild = interaction.guild;
        if (guild == null) {
            await interaction.reply('You must be in a guild to use this command');
            return;
        }
        let guildQueue = player.getQueue(guild.id);
        if (guildQueue == null) {
            await interaction.reply('There is no song to stop');
            return;
        }
        await guildQueue.stop();
        await guildQueue.clearQueue();
        await interaction.reply('Stopped song');
    }
};
