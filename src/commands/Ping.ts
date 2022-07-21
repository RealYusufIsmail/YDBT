import {ApplicationCommandType, Client, CommandInteraction} from "discord.js";
import {Command} from "../Command";

export const Ping: Command = {
    name: "ping",
    description: "Shows the bot's ping",
    type: ApplicationCommandType.ChatInput,

    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.followUp({
            ephemeral: true,
            content: "Pong!"
        });
    },
}