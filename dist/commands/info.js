"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = void 0;
const discord_js_1 = require("discord.js");
exports.Info = {
    name: "info",
    description: "Shows info about the bot",
    type: "CHAT_INPUT",
    run: async (client, interaction) => {
        const bot = client.user;
        const guild = interaction.guild;
        const embedBuilder = new discord_js_1.MessageEmbed();
    },
};
