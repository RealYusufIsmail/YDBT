import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "src/Command";

export const Ping : Command = {
    name: "ping",
    description: "Ping!",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        await interaction.followUp({
            ephemeral: true,
            content: "Pong!"
        });
    }
}