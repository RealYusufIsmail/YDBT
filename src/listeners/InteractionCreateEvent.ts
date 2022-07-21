import {Client, CommandInteraction, Interaction} from "discord.js";
import {Commands} from "../Commands";


export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isChatInputCommand()) {
            await handleSlashCommand(client, interaction);
        }
    });
}

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName);

    if (!slashCommand) {
       throw new Error(`Could not find command ${interaction.commandName}`);
    }

    await slashCommand.run(client, interaction);
}