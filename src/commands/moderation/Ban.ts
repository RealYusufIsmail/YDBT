import {Command} from "../../handle/Command";
import {ApplicationCommandOptionType, ApplicationCommandType, Client, CommandInteraction} from "discord.js";

export const Ban: Command = {
    name: "ban",
    description: "Bans a user from the server",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "user",
            description: "The user to ban",
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "reason",
            description: "The reason for the ban",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],

    run: async (client: Client, interaction: CommandInteraction) => {
        const user = interaction.options.getUser("user");
        const reason = interaction.isChatInputCommand() ? interaction.options.getString("reason") : "No reason provided";

        if (!user) {
            await interaction.reply("Could not find the user to ban");
            return;
        }

        if (!reason) {
            await interaction.reply("No reason provided");
            return;
        }

        await interaction!.guild!.members.ban(user, {reason})
            .then(() => {
                    interaction.reply(`Banned ${user.username}#${user.discriminator}`);
                }
            ).catch(() => {
                interaction.reply({content: "Could not ban the provided user", ephemeral: true});
            });
    }
}