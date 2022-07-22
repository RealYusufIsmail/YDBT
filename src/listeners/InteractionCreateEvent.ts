import {ButtonInteraction, CacheType, Client, CommandInteraction, Interaction} from "discord.js";
import {RegSlashCommands} from "../handle/command/RegSlashCommands";
import {RegButtons} from "../handle/button/RegButtons";


export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isChatInputCommand()) {
            await handleSlashCommand(client, interaction);
        } else if (interaction.isButton()) {
            await handleButton(client, interaction);
        }
    });
}

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = RegSlashCommands.find(c => c.name === interaction.commandName);

    if (!slashCommand) {
       await interaction.reply({content: "Could not find the command", ephemeral: true});
       return;
    }

    await slashCommand.run(client, interaction);
}

const handleButton = async (client: Client, interaction: ButtonInteraction): Promise<void> => {
    const button = RegButtons.find(b => b.customId === interaction.customId);

    if (!button) {
        await interaction.reply({content: "Could not find the button", ephemeral: true});
        return;
    }

    await button.run(client, interaction);
}