"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSlashCommandBuilder = void 0;
const builders_1 = require("@discordjs/builders");
class CustomSlashCommandBuilder extends builders_1.SlashCommandBuilder {
    guildOnly = false;
    setGuildOnly(guildOnly) {
        this.guildOnly = guildOnly;
        return this;
    }
    getName() {
        return this.name;
    }
    isGuildOnly() {
        return this.guildOnly;
    }
    original() {
        return this;
    }
    toString() {
        return this.toJSON();
    }
}
exports.CustomSlashCommandBuilder = CustomSlashCommandBuilder;
