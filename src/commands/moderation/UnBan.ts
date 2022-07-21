import {Command} from "../../Command";
import {ApplicationCommandOptionType, ApplicationCommandType, Client, CommandInteraction} from "discord.js";

export const UnBan: Command = {
    name: "unban",
    description: "Unbans a user from the server",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "user",
            description: "The user to unban",
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "reason",
            description: "The reason for the unban",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],

    run: async (client: Client, interaction: CommandInteraction) => {
        const user = interaction.options.getUser("user");
        const reason = interaction.isChatInputCommand() ? interaction.options.getString("reason") : "No reason provided";

        if(!user) {
            await interaction.reply("Could not find the user to unban");
            return;
        }

        if (!reason) {
            await interaction.reply("No reason provided");
            return;
        }

        await interaction!.guild!.members.unban(user, reason)
            .then(() => {
                interaction.reply(`Unbanned ${user.username}#${user.discriminator}`);
            }
            ).catch(() => {
                interaction.reply({ content:"Could not unban the provided user", ephemeral: true});
            });
    }
}