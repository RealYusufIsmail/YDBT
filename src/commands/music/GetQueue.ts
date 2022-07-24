import {ISlashCommand} from "../../handle/command/ISlashCommand";
import {ApplicationCommandType, Colors, EmbedBuilder} from "discord.js";

export const GetQueue: ISlashCommand = {
    name: "get_queue",
    description: "Gets the current queue",
    type: ApplicationCommandType.ChatInput,

    run: async (client, interaction, player) => {
        const guild = interaction.guild;

        if (guild == null) {
            await interaction.reply("You must be in a guild to use this command");
            return;
        }

        let guildQueue = player.getQueue(guild.id);

        if (guildQueue == null) {
            await interaction.reply("There is no songs in the queue");
            return;
        }

        let queue : String = String(guildQueue);
        queue = queue.replace(/\n/g, "\\n");

        const embed = new EmbedBuilder()
            .setTitle("Queue")
            .addFields(
                { name: 'Queue', value: queue.toString() }
            )
            .setColor(Colors.Aqua)
            .setTimestamp();

        await interaction.reply({embeds: [embed]});
    }
}