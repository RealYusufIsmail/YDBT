import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { CustomSlashCommandBuilder } from "../backend/SlashBuilder";
import { Command } from "../Command";

export const Info : Command = {
    name: "info",
    description: "Shows info about the bot",
    type: "CHAT_INPUT",
    
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const bot = client.user;
        const guild = interaction.guild;
        const embedBuilder = new MessageEmbed();
    
    },
}