import { ISlashCommand } from '../../handle/command/ISlashCommand';
import { ApplicationCommandType } from 'discord-api-types/v10';
import { ApplicationCommandOptionType, PermissionsBitField } from 'discord.js';
import { updateModerationDatabase } from '../../db/MongoDB';
import { TypeOfModeration } from '../../db/TypeOfModeration';

export const TimeOut: ISlashCommand = {
  name: 'timeout',
  description: 'Time out a user for a certain amount of time.',
  type: ApplicationCommandType.ChatInput,
  botRequiredPerms: [PermissionsBitField.Flags.MuteMembers],
  userRequiredPerms: [PermissionsBitField.Flags.MuteMembers],
  options: [
    {
      name: 'member',
      description: 'The member to time out.',
      type: ApplicationCommandOptionType.User,
      required: true
    },
    {
      name: 'duration',
      description:
        'The amount of time (in minutes) to time out the member for.',
      type: ApplicationCommandOptionType.Number,
      min_value: 1,
      max_value: 40320,
      required: true
    },
    {
      name: 'reason',
      description: 'The reason for the timeout.',
      type: ApplicationCommandOptionType.String,
      required: true
    }
  ],

  run: async (client, interaction, player, db) => {
    const member = interaction.isChatInputCommand()
      ? interaction.options.getUser('member')
      : undefined;
    const duration = interaction.isChatInputCommand()
      ? interaction.options.getNumber('duration')
      : 0;
    const bot = interaction.guild!.members.cache.get(client.user!.id);
    const reason = interaction.isChatInputCommand()
      ? interaction.options.getString('reason')
      : '';

    if (!member) {
      await interaction.reply('Could not find the member to time out');
      return;
    }

    if (!duration) {
      await interaction.reply('No duration provided');
      return;
    }

    //get duration in minutes
    const minutes = duration * 60 * 1000;
    const time = Date.now() + minutes;

    //set the timeout
    const guildMember = interaction.guild!.members.me;

    if (!guildMember) {
      await interaction.reply('Could not find the member to time out');
      return;
    }

    if (!reason) {
      await interaction.reply('No reason provided');
      return;
    }

    //check if the member being timed out is not stronger than the bot
    if (guildMember.roles.highest.comparePositionTo(bot!.roles.highest) > 0) {
      await interaction.reply(
        'I cannot time out a member that is stronger than me'
      );
      return;
    }

    await updateModerationDatabase(
      db,
      interaction.guild!.id,
      member.id,
      reason,
      TypeOfModeration.TIMEOUT
    );

    await guildMember
      .timeout(time, reason)
      .then(() => {
        interaction.reply(
          `Timed out ${member.username}#${member.discriminator} for ${duration} minutes`
        );
      })
      .catch(() => {
        interaction.reply({
          content: 'Could not time out the provided member',
          ephemeral: true
        });
      });
  }
};
