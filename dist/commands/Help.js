"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Help = void 0;
const discord_js_1 = require("discord.js");
exports.Help = {
    name: "help",
    description: "Shows the help menu",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        const embed = new discord_js_1.EmbedBuilder()
            .setTitle("Help")
            .setDescription("For support, please join the [support server](https://discord.gg/QWQWQWQ)")
            .setColor(discord_js_1.Colors.Aqua);
        const button = new discord_js_1.ActionRowBuilder()
            .addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId("commands")
            .setLabel("Commands")
            .setStyle(discord_js_1.ButtonStyle.Primary))
            .addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId("delete")
            .setLabel("Delete")
            .setStyle(discord_js_1.ButtonStyle.Danger));
        await interaction.reply({ embeds: [embed], components: [button] });
    }
};
