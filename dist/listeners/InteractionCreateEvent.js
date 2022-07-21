"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commands_1 = require("../Commands");
exports.default = (client) => {
    client.on("interactionCreate", async (interaction) => {
        if (interaction.isChatInputCommand()) {
            await handleSlashCommand(client, interaction);
        }
    });
};
const handleSlashCommand = async (client, interaction) => {
    const slashCommand = Commands_1.Commands.find(c => c.name === interaction.commandName);
    if (!slashCommand) {
        throw new Error(`Could not find command ${interaction.commandName}`);
    }
    await slashCommand.run(client, interaction);
};
