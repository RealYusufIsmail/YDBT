import {ISlashCommand} from "../../handle/command/ISlashCommand";
import {ApplicationCommandType} from "discord.js";
import {RepeatMode} from "discord-music-player";

export const RemoveLoop: ISlashCommand = {
    name: "remove_loop",
    description: "Removes the loop from the current song",
    type: ApplicationCommandType.ChatInput,

    run: async (client, interaction, player) => {
        const guild = interaction.guild;

        if (guild == null) {
            await interaction.reply("You must be in a guild to use this command");
            return;
        }

        let guildQueue = player.getQueue(guild.id);

        if (guildQueue == null) {
            await interaction.reply("There is no song to remove loop from");
            return;
        }

        guildQueue.setRepeatMode(RepeatMode.DISABLED); // or 0 instead of RepeatMode.DISABLED
    }
}