import { ISlashCommand } from '../../handle/command/ISlashCommand';
import { ApplicationCommandType, Colors, EmbedBuilder } from 'discord.js';

export const GetQueue: ISlashCommand = {
  name: 'queue',
  description: 'Gets the current queue',
  type: ApplicationCommandType.ChatInput,

  run: async (client, interaction, player) => {
    const guild = interaction.guild;

    if (guild == null) {
      await interaction.reply('You must be in a guild to use this command');
      return;
    }

    let guildQueue = player.getQueue(guild.id);

    if (guildQueue == null) {
      await interaction.reply('There is no songs in the queue');
      return;
    }

    const embed = new EmbedBuilder()
      .setTitle('Queue')
      .addFields(
        guildQueue.songs.map((song, index) => {
          return {
            name: `${index + 1}. ${song.name}` + ' by ' + ` ${song.author}`,
            value: `${song.url}` + '\n' + `${song.duration}`
          };
        }) as Array<{ name: string; value: string }>
      )
      .setColor(Colors.Aqua)
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
};
