import {ISlashCommand} from "../../handle/command/ISlashCommand";
import {ApplicationCommandType, Colors, EmbedBuilder} from "discord.js";

export const SongProgress: ISlashCommand = {
    name: "song_progress",
    description: "Shows the current song progress",
    type: ApplicationCommandType.ChatInput,

    run: async (client, interaction, player) => {
        const guild = interaction.guild;

        if (guild == null) {
            await interaction.reply("You must be in a guild to use this command");
            return;
        }

        let guildQueue = player.getQueue(guild.id);

        if (guildQueue == null) {
            await interaction.reply("There is no song to show progress for");
            return;
        }

        const ProgressBar = guildQueue.createProgressBar();
        const embed = new EmbedBuilder()
            .setTitle("Song Progress")
            .setDescription(ProgressBar.prettier)
            .setColor(Colors.Aqua);

        await interaction.reply({embeds: [embed]});
    }
}