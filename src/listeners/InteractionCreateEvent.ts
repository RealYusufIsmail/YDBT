import { BaseCommandInteraction, Client, Interaction } from "discord.js";
import { Commands } from "src/Commands";


export default (client: Client) : void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isApplicationCommand() || interaction.isContextMenu()) {
            await onSlashCommand(client, interaction);
        }
    });
}

const onSlashCommand = async (client: Client, interaction: BaseCommandInteraction) : Promise<void> => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName);

    if (!slashCommand) {
        interaction.followUp({ content: "An error has occurred" });
        return;
    }

    await interaction.deferReply();

    slashCommand.run(client, interaction);
}