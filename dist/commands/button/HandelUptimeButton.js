"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandelUptimeButton = void 0;
const discord_js_1 = require("discord.js");
exports.HandelUptimeButton = {
    customId: "uptime",
    run: async (client, interaction) => {
        const uptime = client.isReady() ? client.uptime : 0;
        const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((uptime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((uptime % (1000 * 60)) / 1000);
        const beautifulUptimeString = `\`${days > 0 ? `${days} days, ` : ""}${hours > 0 ? `${hours} hours, ` : ""}${minutes > 0 ? `${minutes} minutes, ` : ""}${seconds > 0 ? `${seconds} seconds` : ""}\``;
        const embed = new discord_js_1.EmbedBuilder()
            .setTitle("Uptime")
            .setDescription('I have been online for ' + beautifulUptimeString)
            .setColor(discord_js_1.Colors.Aqua);
        const button = new discord_js_1.ActionRowBuilder()
            .addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId("delete")
            .setLabel("Delete")
            .setStyle(discord_js_1.ButtonStyle.Danger));
        await interaction.reply({ embeds: [embed], components: [button] });
    }
};
