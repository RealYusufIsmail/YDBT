"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCommandsButtonHandler = void 0;
const discord_js_1 = require("discord.js");
const RegSlashCommands_1 = require("../../handle/command/RegSlashCommands");
exports.GetCommandsButtonHandler = {
    customId: 'commands',
    run: async (client, interaction) => {
        const embed = new discord_js_1.EmbedBuilder();
        const button = new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId('delete')
            .setLabel('Delete')
            .setStyle(discord_js_1.ButtonStyle.Danger));
        if ((0, RegSlashCommands_1.getCommands)().length > 20) {
            embed.setTitle('Commands');
            embed.setDescription('Page 1');
            embed.addFields((0, RegSlashCommands_1.getCommands)()
                .slice(0, 20)
                .map((command) => {
                return {
                    name: command.name,
                    value: command.description
                };
            }));
            embed.setColor(discord_js_1.Colors.Aqua);
            button.addComponents(new discord_js_1.ButtonBuilder()
                .setCustomId(`page2`)
                .setLabel(`Page 2`)
                .setStyle(discord_js_1.ButtonStyle.Primary));
        }
        else {
            embed.setTitle('Commands');
            embed.setDescription('Page 1');
            embed.addFields((0, RegSlashCommands_1.getCommands)().map((command) => {
                return {
                    name: command.name,
                    value: command.description
                };
            }));
            embed.setColor(discord_js_1.Colors.Aqua);
        }
        await interaction.reply({ embeds: [embed], components: [button] });
    }
};
