"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ping = void 0;
const discord_js_1 = require("discord.js");
exports.Ping = {
    name: "ping",
    description: "Shows the bot's ping",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        await interaction.followUp({
            ephemeral: true,
            content: "Pong!"
        });
    },
};
