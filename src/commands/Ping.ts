import {ApplicationCommandType, Client, CommandInteraction} from "discord.js";
import {Command} from "../handle/Command";

export const Ping: Command = {
    name: "ping",
    description: "Shows the bot's ping",
    type: ApplicationCommandType.ChatInput,

    run: async (client: Client, interaction: CommandInteraction) => {

        const sent = await interaction.reply({content: 'Pinging...', fetchReply: true, ephemeral: true});
        await interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
    },
}