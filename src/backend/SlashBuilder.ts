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

    public isGuildOnly(): boolean {
        return this.guildOnly;
    }

    public original(): SlashCommandBuilder {
        return this;
    }

    public toString() : RESTPostAPIApplicationCommandsJSONBody {
        return this.toJSON();
    }
}