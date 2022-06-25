"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ping = void 0;
const CustomSlashCommandBuilder_1 = require("src/backend/CustomSlashCommandBuilder");
exports.Ping = {
    run: async (client, interaction) => {
    },
    builder: new CustomSlashCommandBuilder_1.CustomSlashCommandBuilder()
        .setName("ping")
        .setDescription("Ping!")
};
