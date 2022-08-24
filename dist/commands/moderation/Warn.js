"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warn = void 0;
const v10_1 = require("discord-api-types/v10");
const discord_js_1 = require("discord.js");
exports.Warn = {
    name: 'warn',
    description: 'Used to warn a user',
    type: v10_1.ApplicationCommandType.ChatInput,
    botRequiredPerms: [discord_js_1.PermissionsBitField.Flags.MuteMembers],
    userRequiredPerms: [discord_js_1.PermissionsBitField.Flags.MuteMembers],
    run: async (client, interaction, play, db) => {
    }
};
