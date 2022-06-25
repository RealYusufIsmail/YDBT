import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { CustomSlashCommandBuilder } from "../backend/SlashBuilder";
import { Command } from "../Command";

export const Info : Command = {
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const bot = client.user;
        const guild = interaction.guild;
        const embedBuilder = new MessageEmbed();
    
    },

    builder: new CustomSlashCommandBuilder()
        .setName("info")
        .setDescription("Info!"),
}