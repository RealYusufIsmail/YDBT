"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSlashCommandBuilder = void 0;
const builders_1 = require("@discordjs/builders");
class CustomSlashCommandBuilder extends builders_1.SlashCommandBuilder {
    isGuildOnly = false;
    setGuildOnly(guildOnly) {
        this.isGuildOnly = guildOnly;
        return this;
    }
    getName() {
        return this.name;
    }
}
exports.CustomSlashCommandBuilder = CustomSlashCommandBuilder;
