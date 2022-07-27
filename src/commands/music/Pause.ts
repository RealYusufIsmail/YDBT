import { ISlashCommand } from '../../handle/command/ISlashCommand';
import { ApplicationCommandType } from 'discord.js';

export const Pause: ISlashCommand = {
  name: 'pause',
  description: 'Pauses the current song',
  type: ApplicationCommandType.ChatInput,

  run: async (client, interaction, player) => {
    const guild = interaction.guild;

    if (guild == null) {
      await interaction.reply('You must be in a guild to use this command');
      return;
    }

    let guildQueue = player.getQueue(guild.id);

    if (guildQueue == null) {
      await interaction.reply('There is no song to stop');
      return;
    }

    await guildQueue.setPaused(true);
    await interaction.reply('Paused song');
  }
};
