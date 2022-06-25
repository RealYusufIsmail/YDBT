"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ping = void 0;
exports.Ping = {
    name: "ping",
    description: "Shows the bot's ping",
    type: "CHAT_INPUT",
    run: async (client, interaction) => {
        await interaction.followUp({
            ephemeral: true,
            content: "Pong!"
        });
    },
};
