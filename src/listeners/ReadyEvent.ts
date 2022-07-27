import { Client } from 'discord.js';
import { RegSlashCommands } from '../handle/command/RegSlashCommands';

export default (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return;
    }

    await client.application.commands.set(RegSlashCommands);
  });
};
