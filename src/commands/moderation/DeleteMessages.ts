import {ApplicationCommandOptionType, ApplicationCommandType, PermissionsBitField, TextChannel} from "discord.js";
import {ISlashCommand} from "../../handle/command/ISlashCommand";

export const DeleteMessages: ISlashCommand = {
    name: "delete",
    description: "Deletes a number of messages",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "count",
            description: "The number of messages to delete",
            type: ApplicationCommandOptionType.Number,
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

        if (!member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
            await interaction.reply({
                content: "You do not have the required permissions to use this command",
                ephemeral: true
            });
            return;
        }

        const channel = interaction.channel!.isTextBased() ? interaction.channel as TextChannel : undefined;

        await channel!.bulkDelete(count);

        await interaction.reply(`Deleted ${count} messages`);
    }
}