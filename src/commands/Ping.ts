import { BaseCommandInteraction, Client } from "discord.js";
import { CustomSlashCommandBuilder } from "../backend/SlashBuilder";
import { Command } from "../Command";

export const Ping : Command = {

    run: async (client: Client, interaction: BaseCommandInteraction) => {
        await interaction.followUp({
            ephemeral: true,
            content: "Pong!"
        });
    },

    builder: new CustomSlashCommandBuilder()
        .setName("ping")
        .setDescription("Ping!"),

    getBuilder: () => {
        return Ping.builder;
    }
}