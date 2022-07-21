import {ApplicationCommandOptionType, Client, Colors, CommandInteraction, EmbedBuilder, GuildMember} from "discord.js";
import {Command} from "../handle/Command";
import {ApplicationCommandType} from "discord-api-types/v10";

export const UserInfo: Command = {
    name: "user_info",
    description: "Shows info about a user user",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "user",
            description: "The user to show info about",
            type: ApplicationCommandOptionType.User,
            required: false
        }
    ],

    run: async (client: Client, interaction: CommandInteraction) => {
        const user = interaction.options.getUser("user");
        const member = interaction.member;
        if (user == null && member != null) {
            if (!(!(member instanceof GuildMember) || member.partial)) {
                const builder = new EmbedBuilder()
                    .setTitle("Info about " + member.user.username)
                    .addFields([
                        {name: "ID", value: interaction.user.id.toString(), inline: false},
                        {name: "Tag", value: interaction.user.tag.toString(), inline: false},
                        {name: "Created at", value: interaction.user.createdAt.toString(), inline: false},
                        {name: "Joined at", value: member.joinedAt!.toString(), inline: false},
                        {name : "Is bot", value: interaction.user.bot.toString(), inline: false}])
                    .setColor(Colors.Aqua);
                await interaction.reply({embeds: [builder]});
            }
        } else if (user != null) {
            const builder = new EmbedBuilder()
                .setTitle("Info about " + user.username)
                .addFields([
                    {name: "ID", value: user.id.toString(), inline: false},
                    {name: "Tag", value: user.tag.toString(), inline: false},
                    {name: "Created at", value: user.createdAt.toString(), inline: false},
                    {name : "Is bot", value: user.bot.toString(), inline: false}])
                .setColor(Colors.Aqua);
            await interaction.reply({embeds: [builder]});
        }
    }
}
