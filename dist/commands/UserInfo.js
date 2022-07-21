"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
const discord_js_1 = require("discord.js");
const v10_1 = require("discord-api-types/v10");
exports.UserInfo = {
    name: "user_info",
    description: "Shows info about a user user",
    type: v10_1.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "user",
            description: "The user to show info about",
            type: discord_js_1.ApplicationCommandOptionType.User,
            required: false
        }
    ],
    run: async (client, interaction) => {
        const user = interaction.options.getUser("user");
        const member = interaction.member;
        if (user == null && member != null) {
            if (!(!(member instanceof discord_js_1.GuildMember) || member.partial)) {
                const builder = new discord_js_1.EmbedBuilder()
                    .setTitle("Info about " + member.user.username)
                    .addFields([
                    { name: "ID", value: interaction.user.id.toString(), inline: false },
                    { name: "Tag", value: interaction.user.tag.toString(), inline: false },
                    { name: "Created at", value: interaction.user.createdAt.toString(), inline: false },
                    { name: "Joined at", value: member.joinedAt.toString(), inline: false },
                    { name: "Is bot", value: interaction.user.bot.toString(), inline: false }
                ])
                    .setColor(discord_js_1.Colors.Aqua);
                await interaction.reply({ embeds: [builder] });
            }
        }
        else if (user != null) {
            const builder = new discord_js_1.EmbedBuilder()
                .setTitle("Info about " + user.username)
                .addFields([
                { name: "ID", value: user.id.toString(), inline: false },
                { name: "Tag", value: user.tag.toString(), inline: false },
                { name: "Created at", value: user.createdAt.toString(), inline: false },
                { name: "Is bot", value: user.bot.toString(), inline: false }
            ])
                .setColor(discord_js_1.Colors.Aqua);
            await interaction.reply({ embeds: [builder] });
        }
    }
};
