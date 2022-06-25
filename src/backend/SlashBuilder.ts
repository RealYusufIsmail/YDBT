import { SlashCommandBuilder } from "@discordjs/builders";
import { RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types/v10";

export class CustomSlashCommandBuilder extends SlashCommandBuilder {
    guildOnly: boolean = false;
    
    public setGuildOnly(guildOnly: boolean): CustomSlashCommandBuilder {
        this.guildOnly = guildOnly;
        return this;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public isGuildOnly(): boolean {
        return this.guildOnly;
    }
}