import {Client, Colors, CommandInteraction, EmbedBuilder} from "discord.js";
import {Command} from "../handle/Command";
import {ApplicationCommandType} from "discord-api-types/v10";

export const Info: Command = {
    name: "info",
    description: "Shows info about the bot",
    type: ApplicationCommandType.ChatInput,

    run: async (client: Client, interaction: CommandInteraction) => {
        const bot = client.user;
        const guild = interaction.guild;

        const embed = new EmbedBuilder()
            .setTitle("Info about " + bot!.username)
            .addFields([
                {name: "ID", value: bot!.id.toString(), inline: false},
                {name: "Tag", value: bot!.tag.toString(), inline: false},
                {name: "Created at", value: bot!.createdAt.toString(), inline: false},
                {name: "Joined at", value: guild!.joinedAt.toString(), inline: false},
                {name: "Amount of members", value: guild!.memberCount.toString(), inline: false},
                {name: "Amount of channels", value: guild!.channels.cache.size.toString(), inline: false},
                {name: "Amount of guilds", value: client.guilds.cache.size.toString(), inline: false}])
            .setColor(Colors.Aqua);

        await interaction.reply({embeds: [embed]});
    }
}