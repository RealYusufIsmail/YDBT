"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnBan = void 0;
const discord_js_1 = require("discord.js");
const MongoDB_1 = require("../../db/MongoDB");
const TypeOfModeration_1 = require("../../db/TypeOfModeration");
exports.UnBan = {
    name: 'unban',
    description: 'Unbans a user from the server',
    type: discord_js_1.ApplicationCommandType.ChatInput,
    botRequiredPerms: [discord_js_1.PermissionsBitField.Flags.BanMembers],
    userRequiredPerms: [discord_js_1.PermissionsBitField.Flags.BanMembers],
    options: [
        {
            name: 'user',
            description: 'The user to unban',
            type: discord_js_1.ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: 'reason',
            description: 'The reason for the unban',
            type: discord_js_1.ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client, interaction, player, db) => {
        const user = interaction.options.getUser('user');
        const reason = interaction.isChatInputCommand()
            ? interaction.options.getString('reason')
            : 'No reason provided';
        if (!user) {
            await interaction.reply('Could not find the user to unban');
            return;
        }
        if (!reason) {
            await interaction.reply('No reason provided');
            return;
        }
        await (0, MongoDB_1.updateModerationDatabase)(db, interaction.guild.id, user.id, reason, TypeOfModeration_1.TypeOfModeration.UNBAN);
        await interaction
            .guild.members.unban(user, reason)
            .then(() => {
            interaction.reply(`Unbanned ${user.username}#${user.discriminator}`);
        })
            .catch(() => {
            interaction.reply({
                content: 'Could not unban the provided user',
                ephemeral: true
            });
        });
    }
};
