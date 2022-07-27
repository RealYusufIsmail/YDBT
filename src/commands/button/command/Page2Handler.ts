import { IButton } from '../../../handle/button/Button';
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Colors,
  EmbedBuilder
} from 'discord.js';
import { getCommands } from '../../../handle/command/RegSlashCommands';

export const Page2Handler: IButton = {
  customId: 'page2',

  run: async (client, interaction) => {
    //need a way to get the commands which are not in the first page
    const commands = getCommands();

    //want everything after length of 20
    const commandsPage2 = commands.slice(20);

    const embed = new EmbedBuilder();

    const button = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId('delete')
        .setLabel('Delete')
        .setStyle(ButtonStyle.Danger)
    );

    if (commandsPage2.length > 40) {
      embed.setTitle('Commands');
      embed.setDescription('Page 2');
      embed.addFields(
        commandsPage2.slice(0, 40).map((command) => {
          return {
            name: command.name,
            value: command.description
          };
        })
      );
      embed.setColor(Colors.Aqua);

      button.addComponents(
        new ButtonBuilder()
          .setCustomId(`page3`)
          .setLabel(`Page 3`)
          .setStyle(ButtonStyle.Primary)
      );
    } else {
      embed.setTitle('Commands');
      embed.setDescription('Page 2');
      embed.addFields(
        commandsPage2.map((command) => {
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
