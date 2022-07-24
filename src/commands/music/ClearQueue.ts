import {ISlashCommand} from "../../handle/command/ISlashCommand";
import {ApplicationCommandType} from "discord.js";

export const ClearQueue: ISlashCommand = {
    name: "clear_queue",
    description: "Clears the current queue",
    type: ApplicationCommandType.ChatInput,

    run: async (client, interaction, player) => {
        const guild = interaction.guild;

        if (guild == null) {
            await interaction.reply("You must be in a guild to use this command");
            return;
        }

        let guildQueue = player.getQueue(guild.id);

        if (guildQueue == null) {
            await interaction.reply("There is no queue to clear");
            return;
        }

        await guildQueue.clearQueue();
        await interaction.reply("Cleared queue");
    }
}