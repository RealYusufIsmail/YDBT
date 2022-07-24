"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOut = void 0;
const v10_1 = require("discord-api-types/v10");
const discord_js_1 = require("discord.js");
exports.TimeOut = {
    name: "timeout",
    description: "Time out a user for a certain amount of time.",
    type: v10_1.ApplicationCommandType.ChatInput,
    botRequiredPerms: [discord_js_1.PermissionsBitField.Flags.MuteMembers],
    userRequiredPerms: [discord_js_1.PermissionsBitField.Flags.MuteMembers],
    options: [
        {
            name: "member",
            description: "The member to time out.",
            type: discord_js_1.ApplicationCommandOptionType.User,
            required: true,
        },
        {
            name: "duration",
            description: "The amount of time (in minutes) to time out the member for.",
            type: discord_js_1.ApplicationCommandOptionType.Number,
            min_value: 1,
            max_value: 40320,
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const member = interaction.isChatInputCommand() ? interaction.options.getUser("member") : undefined;
        const duration = interaction.isChatInputCommand() ? interaction.options.getNumber("duration") : 0;
        const bot = interaction.guild.members.cache.get(client.user.id);
        if (!member) {
            await interaction.reply("Could not find the member to time out");
            return;
        }
        if (!duration) {
            await interaction.reply("No duration provided");
            return;
        }
        const minutes = duration * 60 * 1000;
        const time = Date.now() + minutes;
        const guildMember = interaction.guild.members.cache.find(m => m.user.id === member.id);
        if (!guildMember) {
            await interaction.reply("Could not find the member to time out");
            return;
        }
        if (guildMember.roles.highest.comparePositionTo(bot.roles.highest) > 0) {
            await interaction.reply("I cannot time out a member that is stronger than me");
            return;
        }
        await guildMember.timeout(time).then(() => {
            interaction.reply(`Timed out ${member.username}#${member.discriminator} for ${duration} minutes`);
        })
            .catch(() => {
            interaction.reply({ content: "Could not time out the provided member", ephemeral: true });
        });
    }
};
