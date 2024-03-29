"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ban = void 0;
const discord_js_1 = require("discord.js");
const MongoDB_1 = require("../../db/MongoDB");
const TypeOfModeration_1 = require("../../db/TypeOfModeration");
exports.Ban = {
    name: 'ban',
    description: 'Bans a user from the server',
    type: discord_js_1.ApplicationCommandType.ChatInput,
    botRequiredPerms: [discord_js_1.PermissionsBitField.Flags.BanMembers],
    userRequiredPerms: [discord_js_1.PermissionsBitField.Flags.BanMembers],
    options: [
        {
            name: 'user',
            description: 'The user to ban',
            type: discord_js_1.ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: 'reason',
            description: 'The reason for the ban',
            type: discord_js_1.ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client, interaction, p, db) => {
        const user = interaction.options.getUser('user');
        const reason = interaction.isChatInputCommand()
            ? interaction.options.getString('reason')
            : 'No reason provided';
        const bot = interaction.guild.members.cache.get(client.user.id);
        if (!user) {
            await interaction.reply('Could not find the user to ban');
            return;
        }
        if (!reason) {
            await interaction.reply('No reason provided');
            return;
        }
        const guildMember = interaction.guild.members.me;
        if (!guildMember) {
            await interaction
                .guild.members.ban(user, { reason })
                .then(() => {
                interaction.reply(`Banned ${user.username}#${user.discriminator}`);
            })
                .catch(() => {
                interaction.reply({
                    content: 'Could not ban the provided user',
                    ephemeral: true
                });
            });
            await (0, MongoDB_1.updateModerationDatabase)(db, interaction.guild.id, user.id, reason, TypeOfModeration_1.TypeOfModeration.BAN);
        }
        else {
            if (guildMember.roles.highest.comparePositionTo(bot.roles.highest) > 0) {
                await interaction.reply('I cannot ban a member that is stronger than me');
                return;
            }
            await interaction
                .guild.members.ban(guildMember, { reason })
                .then(() => {
                interaction.reply(`Banned ${user.username}#${user.discriminator}`);
            })
                .catch(() => {
                interaction.reply({
                    content: 'Could not ban the provided user',
                    ephemeral: true
                });
            });
            await (0, MongoDB_1.updateModerationDatabase)(db, interaction.guild.id, guildMember.id, reason, TypeOfModeration_1.TypeOfModeration.BAN);
        }
    }
};
