"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.ToggleLoop = void 0;
const discord_js_1 = require("discord.js");
const discord_music_player_1 = require("discord-music-player");
exports.ToggleLoop = {
    name: "toggle_loop",
    description: "Toggles the loop on the current song",
    type: discord_js_1.ApplicationCommandType.ChatInput,
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
        guildQueue.setRepeatMode(discord_music_player_1.RepeatMode.SONG);
    }
};
