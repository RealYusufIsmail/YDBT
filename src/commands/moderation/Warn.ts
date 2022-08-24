import {ISlashCommand} from "src/handle/command/ISlashCommand";
import {ApplicationCommandType} from "discord-api-types/v10";
import {PermissionsBitField} from "discord.js";

export const Warn : ISlashCommand = {
    name: 'warn',
    description: 'Used to warn a user',
    type : ApplicationCommandType.ChatInput,
    botRequiredPerms : [PermissionsBitField.Flags.MuteMembers],
    userRequiredPerms: [PermissionsBitField.Flags.MuteMembers],

    run: async (client, interaction, play, db) =>   {

    }
}

