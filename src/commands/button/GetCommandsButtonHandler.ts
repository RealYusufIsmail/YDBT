import {IButton} from "../../handle/button/Button";
import {ActionRowBuilder, ButtonBuilder, ButtonStyle, Colors, EmbedBuilder} from "discord.js";
import {getCommands} from "../../handle/command/RegSlashCommands";

export const GetCommandsButtonHandler: IButton = {
    customId: "commands",

    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setTitle("Commands")
            .addFields(getCommands().map(command => {
                    return {
                        name: command.name,
                        value: command.description
                    }
                }
            ))
            .setColor(Colors.Aqua);

        const button = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(new ButtonBuilder()
                .setCustomId("delete")
                .setLabel("Delete")
                .setStyle(ButtonStyle.Danger));

        //if getCommands().length > 25, split into multiple pages
        const pages = [];
        let page = 0;

        while (getCommands().length > page * 25) {
            pages.push(embed.setDescription(`Page ${page + 1}`));
            page++;
            button.addComponents(new ButtonBuilder()
                .setCustomId(`page_${page++}`)
                .setLabel(`Page ${page++}`)
                .setStyle(ButtonStyle.Primary));
        }

        await interaction.reply({embeds: pages, components: [button]});

        //TODO: Figure out how to make this work
    }
}