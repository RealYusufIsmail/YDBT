"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegSlashCommands_1 = require("../handle/command/RegSlashCommands");
const RegButtons_1 = require("../handle/button/RegButtons");
exports.default = (client, player, db) => {
    client.on("interactionCreate", async (interaction) => {
        if (interaction.isChatInputCommand()) {
            await handleSlashCommand(client, interaction, player, db);
        }
        else if (interaction.isButton()) {
            await handleButton(client, interaction);
        }
    });
};
const handleSlashCommand = async (client, interaction, player, db) => {
    const command = RegSlashCommands_1.RegSlashCommands.find(c => c.name === interaction.commandName);
    if (!command) {
        await interaction.reply({ content: "Could not find the command", ephemeral: true });
        return;
    }
    const guildMember = interaction.member;
    const bot = client.isReady() ? client.user : null;
    const botAsMember = interaction.guild.members.me;
    await checkIfMemberPerms(guildMember, command.userRequiredPerms, interaction);
    await checkIfMemberPerms(botAsMember, command.botRequiredPerms, interaction);
    await command.run(client, interaction, player, db);
};
async function checkIfMemberPerms(member, perms, interaction) {
    if (member != null) {
        if (perms != null) {
            const missingPerms = perms.filter(p => !member.permissions.has(p));
            if (missingPerms.length > 0) {
                await interaction.reply({
                    content: `You do not have the required permissions: ${missingPerms.join(", ")}`,
                    ephemeral: true
                });
                return false;
            }
        }
        return true;
    }
    else {
        return true;
    }
}
const handleButton = async (client, interaction) => {
    const button = RegButtons_1.RegButtons.find(b => b.customId === interaction.customId);
    if (!button) {
        await interaction.reply({ content: "Could not find the button", ephemeral: true });
        return;
    }
    await button.run(client, interaction);
};
