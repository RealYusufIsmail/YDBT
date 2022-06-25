import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";

export interface Command extends ChatInputApplicationCommandData {
    name: string;
    description: string;
    run: (client: Client, interaction: BaseCommandInteraction) => void;
}