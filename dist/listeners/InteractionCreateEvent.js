"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegSlashCommands_1 = require("../handle/command/RegSlashCommands");
const RegButtons_1 = require("../handle/button/RegButtons");
exports.default = (client) => {
    client.on("interactionCreate", async (interaction) => {
        if (interaction.isChatInputCommand()) {
            await handleSlashCommand(client, interaction);
        }
        else if (interaction.isButton()) {
            await handleButton(client, interaction);
        }
    });
};
const handleSlashCommand = async (client, interaction) => {
    const slashCommand = RegSlashCommands_1.RegSlashCommands.find(c => c.name === interaction.commandName);
    if (!slashCommand) {
        await interaction.reply({ content: "Could not find the command", ephemeral: true });
        return;
    }
    await slashCommand.run(client, interaction);
};
const handleButton = async (client, interaction) => {
    const button = RegButtons_1.RegButtons.find(b => b.customId === interaction.customId);
    if (!button) {
        await interaction.reply({ content: "Could not find the button", ephemeral: true });
        return;
    }
    await button.run(client, interaction);
};
