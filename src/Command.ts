import { RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types/v10";
import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";
import { CustomSlashCommandBuilder } from "./backend/SlashBuilder";
import { SlashCommandBuilder } from "@discordjs/builders";

export interface Command extends ChatInputApplicationCommandData  {
    run: (client: Client, interaction: BaseCommandInteraction) => Promise<void>;
    
}

export abstract class CommandData implements ChatInputApplicationCommandData {
    name : string;
    description : string;
    type : any;

    constructor(builder : CustomSlashCommandBuilder) {
        this.name = builder.getName();
        this.description = builder.getDescription();
        this.type = "CHAT_INPUT";
    }

    abstract SlashBuilder(): CustomSlashCommandBuilder;

    abstract run(client: Client, interaction: BaseCommandInteraction): Promise<void>;
}