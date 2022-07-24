import {ISlashMusicCommand} from "../../handle/command/ISlashCommand";
import {ApplicationCommandType} from "discord.js";
import {RepeatMode} from "discord-music-player";

export const ToggleQueueLoop: ISlashMusicCommand = {
    name: "toggle_queue_loop",
    description: "Toggles the loop on the current queue",
    type: ApplicationCommandType.ChatInput,

    run: async (client, interaction, player) => {
        const guild = interaction.guild;

        if (guild == null) {
            await interaction.reply("You must be in a guild to use this command");
            return;
        }

        let guildQueue = player.getQueue(guild.id);

        if (guildQueue == null) {
            await interaction.reply("There is no song to toggle loop on");
            return;
        }

        guildQueue.setRepeatMode(RepeatMode.QUEUE); // or 1 instead of RepeatMode.SONG
    }
}