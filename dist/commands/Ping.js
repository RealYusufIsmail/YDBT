"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ping = void 0;
const SlashBuilder_1 = require("../backend/SlashBuilder");
exports.Ping = {
    run: async (client, interaction) => {
        await interaction.followUp({
            ephemeral: true,
            content: "Pong!"
        });
    },
    builder: new SlashBuilder_1.CustomSlashCommandBuilder()
        .setName("ping")
        .setDescription("Ping!"),
    getBuilder: () => {
        return exports.Ping.builder;
    }
};
