import {Command} from "../../handle/Command";
import {ApplicationCommandOptionType, ApplicationCommandType, Client, CommandInteraction} from "discord.js";

export const Kick: Command = {
    name: "kick",
    description: "Kicks a user from the server",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "member",
            description: "The member to kick",
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "reason",
            description: "The reason for the kick",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],

    run: async (client: Client, interaction: CommandInteraction) => {
        const member = interaction.options.getUser("member");
        const reason = interaction.isChatInputCommand() ? interaction.options.getString("reason") : "No reason provided";

        if (!member) {
            await interaction.reply("Could not find the member to kick");
            return;
        }

        if (!reason) {
            await interaction.reply("No reason provided");
            return;
        }

        await interaction!.guild!.members.kick(member, reason)
            .then(() => {
                    interaction.reply(`Kicked ${member.username}#${member.discriminator}`);
                }
            ).catch(() => {
                interaction.reply({content: "Could not kick the provided member", ephemeral: true});
            });
    }
}