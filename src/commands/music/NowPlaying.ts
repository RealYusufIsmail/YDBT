import { ISlashCommand } from '../../handle/command/ISlashCommand';
import { ApplicationCommandType, Colors, EmbedBuilder } from 'discord.js';

export const NowPlaying: ISlashCommand = {
  name: 'now_playing',
  description: 'Shows the current song',
  type: ApplicationCommandType.ChatInput,

  run: async (client, interaction, player) => {
    const guild = interaction.guild;

    if (guild == null) {
      await interaction.reply('You must be in a guild to use this command');
      return;
    }

    let guildQueue = player.getQueue(guild.id);

    if (guildQueue == null) {
      await interaction.reply('You are not playing any songs');
      return;
    }

    // @ts-ignore
    const currentSong = guildQueue.nowPlaying();

    const embed = new EmbedBuilder()
      .setTitle('Now Playing')
      .setDescription(`${currentSong.title} - ${currentSong.author}`)
      .setThumbnail(currentSong.thumbnail)
      .setURL(currentSong.url)
      .setColor(Colors.Aqua);

    await interaction.reply({ embeds: [embed] });
  }
};
