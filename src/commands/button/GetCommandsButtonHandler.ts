import { IButton } from '../../handle/button/Button';
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Colors,
  EmbedBuilder
} from 'discord.js';
import { getCommands } from '../../handle/command/RegSlashCommands';

export const GetCommandsButtonHandler: IButton = {
  customId: 'commands',

  run: async (client, interaction) => {
    const embed = new EmbedBuilder();

    const button = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId('delete')
        .setLabel('Delete')
        .setStyle(ButtonStyle.Danger)
    );

    //if getCommands().length > 25, split into multiple pages
    if (getCommands().length > 20) {
      embed.setTitle('Commands');
      embed.setDescription('Page 1');
      embed.addFields(
        getCommands()
          .slice(0, 20)
          .map((command) => {
            return {
              name: command.name,
              value: command.description
            };
          })
      );
      embed.setColor(Colors.Aqua);

      button.addComponents(
        new ButtonBuilder()
          .setCustomId(`page2`)
          .setLabel(`Page 2`)
          .setStyle(ButtonStyle.Primary)
      );
    } else {
      embed.setTitle('Commands');
      embed.setDescription('Page 1');
      embed.addFields(
        getCommands().map((command) => {
          return {
            name: command.name,
            value: command.description
          };
        })
      );
      embed.setColor(Colors.Aqua);
    }

    await interaction.reply({ embeds: [embed], components: [button] });
  }
};
