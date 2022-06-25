import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";
import { CustomSlashCommandBuilder } from "./backend/SlashBuilder";

export interface Command  {
    run: (client: Client, interaction: BaseCommandInteraction) => Promise<void>;

    builder : CustomSlashCommandBuilder;

    getBuilder : () => CustomSlashCommandBuilder;
}

