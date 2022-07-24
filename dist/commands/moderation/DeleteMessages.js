"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMessages = void 0;
const discord_js_1 = require("discord.js");
exports.DeleteMessages = {
    name: "delete",
    description: "Deletes a number of messages",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    botRequiredPerms: [discord_js_1.PermissionsBitField.Flags.ManageMessages],
    userRequiredPerms: [discord_js_1.PermissionsBitField.Flags.ManageMessages],
    options: [
        {
            name: "count",
            description: "The number of messages to delete",
            type: discord_js_1.ApplicationCommandOptionType.Number,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const count = interaction.isChatInputCommand() ? interaction.options.getNumber("count") : 0;
        if (!count) {
            await interaction.reply("No count provided");
            return;
        }
        const member = interaction.inCachedGuild() ? interaction.member : null;
        if (!member) {
            await interaction.reply("You must be in a guild to use this command");
            return;
        }
        const channel = interaction.channel.isTextBased() ? interaction.channel : undefined;
        await channel.bulkDelete(count);
        await interaction.reply(`Deleted ${count} messages`);
    }
};
