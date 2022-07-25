"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page2Handler = void 0;
const discord_js_1 = require("discord.js");
const RegSlashCommands_1 = require("../../../handle/command/RegSlashCommands");
exports.Page2Handler = {
    customId: "page2",
    run: async (client, interaction) => {
        const commands = (0, RegSlashCommands_1.getCommands)();
        const commandsPage2 = commands.slice(20);
        const embed = new discord_js_1.EmbedBuilder();
        const button = new discord_js_1.ActionRowBuilder()
            .addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId("delete")
            .setLabel("Delete")
            .setStyle(discord_js_1.ButtonStyle.Danger));
        if (commandsPage2.length > 40) {
            embed.setTitle("Commands");
            embed.setDescription("Page 2");
            embed.addFields(commandsPage2.slice(0, 40).map(command => {
                return {
                    name: command.name,
                    value: command.description
                };
            }));
            embed.setColor(discord_js_1.Colors.Aqua);
            button.addComponents(new discord_js_1.ButtonBuilder()
                .setCustomId(`page3`)
                .setLabel(`Page 3`)
                .setStyle(discord_js_1.ButtonStyle.Primary));
        }
        else {
            embed.setTitle("Commands");
            embed.setDescription("Page 2");
            embed.addFields(commandsPage2.map(command => {
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
