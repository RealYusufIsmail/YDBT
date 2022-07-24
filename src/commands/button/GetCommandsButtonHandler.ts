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

        //TODO: build a page system for this

        //add delete button
        const button = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(new ButtonBuilder()
                .setCustomId("delete")
                .setLabel("Delete")
                .setStyle(ButtonStyle.Danger));

        await interaction.reply({embeds: [embed], components: [button]});
    }
}