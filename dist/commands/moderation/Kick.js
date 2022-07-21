"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kick = void 0;
const discord_js_1 = require("discord.js");
exports.Kick = {
    name: "kick",
    description: "Kicks a user from the server",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "member",
            description: "The member to kick",
            type: discord_js_1.ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "reason",
            description: "The reason for the kick",
            type: discord_js_1.ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const member = interaction.options.getUser("member");
        const reason = interaction.isChatInputCommand() ? interaction.options.getString("reason") : "No reason provided";
        if (!member) {
            await interaction.reply("Could not find the member to kick");
            return;
        }
        if (!reason) {
            await interaction.reply("No reason provided");
            return;
        }
        await interaction.guild.members.kick(member, reason)
            .then(() => {
            interaction.reply(`Kicked ${member.username}#${member.discriminator}`);
        }).catch(() => {
            interaction.reply({ content: "Could not kick the provided member", ephemeral: true });
        });
    }
};
