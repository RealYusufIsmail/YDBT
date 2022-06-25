"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = void 0;
const discord_js_1 = require("discord.js");
const SlashBuilder_1 = require("../backend/SlashBuilder");
exports.Info = {
    run: async (client, interaction) => {
        const bot = client.user;
        const guild = interaction.guild;
        const embedBuilder = new discord_js_1.MessageEmbed();
    },
    builder: new SlashBuilder_1.CustomSlashCommandBuilder()
        .setName("info")
        .setDescription("Info!"),
    getBuilder: () => {
        return exports.Info.builder;
    }
};
