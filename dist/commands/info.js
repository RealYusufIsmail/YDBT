"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = void 0;
const discord_js_1 = require("discord.js");
const v10_1 = require("discord-api-types/v10");
exports.Info = {
    name: 'info',
    description: 'Shows info about the bot',
    type: v10_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        const bot = client.user;
        const guild = interaction.guild;
        const embed = new discord_js_1.EmbedBuilder()
            .setTitle('Info about ' + bot.username)
            .addFields([
            { name: 'ID', value: bot.id.toString(), inline: false },
            { name: 'Tag', value: bot.tag.toString(), inline: false },
            { name: 'Created at', value: bot.createdAt.toString(), inline: false },
            { name: 'Joined at', value: guild.joinedAt.toString(), inline: false },
            {
                name: 'Amount of commands',
                value: client.application.commands.cache.size.toString(),
                inline: false
            },
            {
                name: 'Amount of members',
                value: guild.memberCount.toString(),
                inline: false
            },
            {
                name: 'Amount of channels',
                value: guild.channels.cache.size.toString(),
                inline: false
            },
            {
                name: 'Amount of guilds',
                value: client.guilds.cache.size.toString(),
                inline: false
            }
        ])
            .setColor(discord_js_1.Colors.Aqua);
        const button = new discord_js_1.ActionRowBuilder()
            .addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId('uptime')
            .setLabel('Uptime')
            .setStyle(discord_js_1.ButtonStyle.Primary))
            .addComponents(new discord_js_1.ButtonBuilder()
            .setCustomId('delete')
            .setLabel('Delete')
            .setStyle(discord_js_1.ButtonStyle.Danger));
        await interaction.reply({ embeds: [embed], components: [button] });
    }
};
