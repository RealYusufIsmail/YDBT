import {ApplicationCommandType, ChatInputApplicationCommandData, Client, CommandInteraction} from "discord.js";

export interface ISlashCommand extends ChatInputApplicationCommandData {
    type: ApplicationCommandType.ChatInput,
    run: (client: Client, interaction: CommandInteraction) => Promise<void>;
}