import {
  ChatInputApplicationCommandData,
  Client,
  CommandInteraction
} from 'discord.js';
import { Player } from 'discord-music-player';
import { Db, MongoClient } from 'mongodb';

export interface ISlashCommandCore extends ChatInputApplicationCommandData {
  userRequiredPerms?: bigint[];
  botRequiredPerms?: bigint[];
}

export interface ISlashCommand extends ISlashCommandCore {
  run: (
    client: Client,
    interaction: CommandInteraction,
    player: Player,
    db: Db
  ) => Promise<void>;
}
