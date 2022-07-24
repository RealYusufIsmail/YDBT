"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kick = void 0;
const discord_js_1 = require("discord.js");
exports.Kick = {
    name: "kick",
    description: "Kicks a user from the server",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    botRequiredPerms: [discord_js_1.PermissionsBitField.Flags.KickMembers],
    userRequiredPerms: [discord_js_1.PermissionsBitField.Flags.KickMembers],
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
        const bot = interaction.guild.members.cache.get(client.user.id);
        if (!member) {
            await interaction.reply("Could not find the member to kick");
            return;
        }
        if (!reason) {
            await interaction.reply("No reason provided");
            return;
        }
        const guildMember = interaction.guild.members.me;
        if (!guildMember) {
            await interaction.reply("Could not find the member to kick");
            return;
        }
        if (guildMember.roles.highest.comparePositionTo(bot.roles.highest) > 0) {
            await interaction.reply("I cannot kick a member that is stronger than me");
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
