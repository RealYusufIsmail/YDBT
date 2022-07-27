import { ApplicationCommandType } from 'discord.js';
import { ISlashCommand } from '../handle/command/ISlashCommand';

export const Ping: ISlashCommand = {
  name: 'ping',
  description: "Shows the bot's ping",
  type: ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const sent = await interaction.reply({
      content: 'Pinging...',
      fetchReply: true,
      ephemeral: true
    });
    await interaction.editReply(
      `Roundtrip latency: ${
        sent.createdTimestamp - interaction.createdTimestamp
      }ms`
    );
  }
};
