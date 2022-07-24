import {ChatInputApplicationCommandData, Client, CommandInteraction} from "discord.js";
import {Player} from "discord-music-player";

export interface ISlashCommandCore extends ChatInputApplicationCommandData {
    userRequiredPerms?: bigint[];
    botRequiredPerms?: bigint[];
}

export interface ISlashCommand extends ISlashCommandCore {
    run: (client: Client, interaction: CommandInteraction) => Promise<void>;
}

export interface ISlashMusicCommand extends ISlashCommandCore {
    run: (client: Client, interaction: CommandInteraction, player: Player) => Promise<void>;
}