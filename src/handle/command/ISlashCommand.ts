import {ChatInputApplicationCommandData, Client, CommandInteraction} from "discord.js";
import {Player} from "discord-music-player";

export interface ISlashCommandCore extends ChatInputApplicationCommandData {
    userRequiredPerms?: bigint[];
    botRequiredPerms?: bigint[];
}

export interface ISlashCommand extends ISlashCommandCore {
    run: (client: Client, interaction: CommandInteraction, player: Player, db : any) => Promise<void>;
}
