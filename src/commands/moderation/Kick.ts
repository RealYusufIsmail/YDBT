import {ISlashCommand} from "../../handle/command/ISlashCommand";
import {ApplicationCommandOptionType, ApplicationCommandType} from "discord.js";

export const Kick: ISlashCommand = {
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

    run: async (client, interaction) => {
        const member = interaction.options.getUser("member");
        const reason = interaction.isChatInputCommand() ? interaction.options.getString("reason") : "No reason provided";
        const bot = interaction.guild!.members.cache.get(client.user!.id);

        if (!member) {
            await interaction.reply("Could not find the member to kick");
            return;
        }

        if (!reason) {
            await interaction.reply("No reason provided");
            return;
        }

        const guildMember = interaction.guild!.members.cache.find(m => m.user.id === member.id);

        if (!guildMember) {
            await interaction.reply("Could not find the member to kick");
            return;
        }

        if (guildMember.roles.highest.comparePositionTo(bot!.roles.highest) > 0) {
            await interaction.reply("I cannot kick a member that is stronger than me");
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