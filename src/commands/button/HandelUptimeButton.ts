import { IButton } from '../../handle/button/Button';
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Colors,
  EmbedBuilder
} from 'discord.js';

export const HandelUptimeButton: IButton = {
  customId: 'uptime',

  run: async (client, interaction) => {
    const uptime = client.isReady() ? client.uptime : 0;

    //format uptime
    const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (uptime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((uptime % (1000 * 60)) / 1000);
    const beautifulUptimeString = `\`${days > 0 ? `${days} days, ` : ''}${
      hours > 0 ? `${hours} hours, ` : ''
    }${minutes > 0 ? `${minutes} minutes, ` : ''}${
      seconds > 0 ? `${seconds} seconds` : ''
    }\``;

    const embed = new EmbedBuilder()
      .setTitle('Uptime')
      .setDescription('I have been online for ' + beautifulUptimeString)
      .setColor(Colors.Aqua);

    //add delete button
    const button = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId('delete')
        .setLabel('Delete')
        .setStyle(ButtonStyle.Danger)
    );

    await interaction.reply({ embeds: [embed], components: [button] });
  }
};
