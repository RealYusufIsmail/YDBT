import { ISlashCommand } from '../../handle/command/ISlashCommand';
import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  PermissionsBitField
} from 'discord.js';
import { updateModerationDatabase } from '../../db/MongoDB';
import { TypeOfModeration } from '../../db/TypeOfModeration';

export const Ban: ISlashCommand = {
  name: 'ban',
  description: 'Bans a user from the server',
  type: ApplicationCommandType.ChatInput,
  botRequiredPerms: [PermissionsBitField.Flags.BanMembers],
  userRequiredPerms: [PermissionsBitField.Flags.BanMembers],
  options: [
    {
      name: 'user',
      description: 'The user to ban',
      type: ApplicationCommandOptionType.User,
      required: true
    },
    {
      name: 'reason',
      description: 'The reason for the ban',
      type: ApplicationCommandOptionType.String,
      required: true
    }
  ],

  run: async (client, interaction, p, db) => {
    const user = interaction.options.getUser('user');
    const reason = interaction.isChatInputCommand()
      ? interaction.options.getString('reason')
      : 'No reason provided';
    const bot = interaction.guild!.members.cache.get(client.user!.id);

    if (!user) {
      await interaction.reply('Could not find the user to ban');
      return;
    }

    if (!reason) {
      await interaction.reply('No reason provided');
      return;
    }

    const guildMember = interaction.guild!.members.me;

    if (!guildMember) {
      await interaction!
        .guild!.members.ban(user, { reason })
        .then(() => {
          interaction.reply(`Banned ${user.username}#${user.discriminator}`);
        })
        .catch(() => {
          interaction.reply({
            content: 'Could not ban the provided user',
            ephemeral: true
          });
        });

      await updateModerationDatabase(
        db,
        interaction.guild!.id,
        user.id,
        reason,
        TypeOfModeration.BAN
      );
    } else {
      if (guildMember.roles.highest.comparePositionTo(bot!.roles.highest) > 0) {
        await interaction.reply(
          'I cannot ban a member that is stronger than me'
        );
        return;
      }

      await interaction!
        .guild!.members.ban(guildMember, { reason })
        .then(() => {
          interaction.reply(`Banned ${user.username}#${user.discriminator}`);
        })
        .catch(() => {
          interaction.reply({
            content: 'Could not ban the provided user',
            ephemeral: true
          });
        });

      await updateModerationDatabase(
        db,
        interaction.guild!.id,
        guildMember.id,
        reason,
        TypeOfModeration.BAN
      );
    }
  }
};
