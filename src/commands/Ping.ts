import { BaseCommandInteraction, Client } from "discord.js";
import { CustomSlashCommandBuilder } from "../backend/SlashBuilder";
import { Command } from "../Command";

export const Ping : Command = {
    name: "ping",
    description: "Shows the bot's ping",
    type: "CHAT_INPUT",
    
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        await interaction.followUp({
            ephemeral: true,
            content: "Pong!"
        });
    },
}