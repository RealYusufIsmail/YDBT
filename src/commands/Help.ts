import { ISlashCommand } from 'src/handle/command/ISlashCommand';
import {
  ActionRowBuilder,
  ApplicationCommandType,
  ButtonBuilder,
  ButtonStyle,
  Colors,
  EmbedBuilder
} from 'discord.js';

export const Help: ISlashCommand = {
  name: 'help',
  description: 'Shows the help menu',
  type: ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
      .setTitle('Help')
      .setDescription(
        'For support, please join the [support server](https://discord.gg/QWQWQWQ)'
      )
      .setColor(Colors.Aqua);

    const button = new ActionRowBuilder<ButtonBuilder>()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('commands')
          .setLabel('Commands')
          .setStyle(ButtonStyle.Primary)
      )
      .addComponents(
        new ButtonBuilder()
          .setCustomId('delete')
          .setLabel('Delete')
          .setStyle(ButtonStyle.Danger)
      );

    await interaction.reply({ embeds: [embed], components: [button] });
  }
};
