"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCommandsButtonHandler = void 0;
const discord_js_1 = require("discord.js");
const RegSlashCommands_1 = require("../../handle/command/RegSlashCommands");
exports.GetCommandsButtonHandler = {
    customId: "commands",
    run: async (client, interaction) => {
        const embed = new discord_js_1.EmbedBuilder()
            .setTitle("Commands")
            .addFields((0, RegSlashCommands_1.getCommands)().map(command => {
            return {
                name: command.name,
                value: command.description
            };
        }))
            .setColor(discord_js_1.Colors.Aqua);
        const button = new discord_js_1.ActionRowBuilder()
            .addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId("delete")
            .setLabel("Delete")
            .setStyle(discord_js_1.ButtonStyle.Danger));
        const pages = [];
        let page = 0;
        while ((0, RegSlashCommands_1.getCommands)().length > page * 25) {
            pages.push(embed.setDescription(`Page ${page + 1}`));
            page++;
            button.addComponents(new discord_js_1.ButtonBuilder()
                .setCustomId(`page_${page++}`)
                .setLabel(`Page ${page++}`)
                .setStyle(discord_js_1.ButtonStyle.Primary));
        }
        await interaction.reply({ embeds: pages, components: [button] });
    }
};
