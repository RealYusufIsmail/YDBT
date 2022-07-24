"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const dotenv = tslib_1.__importStar(require("dotenv"));
const InteractionCreateEvent_1 = tslib_1.__importDefault(require("./listeners/InteractionCreateEvent"));
const ReadyEvent_1 = tslib_1.__importDefault(require("./listeners/ReadyEvent"));
dotenv.config();
const token = process.env.DISCORD_TOKEN;
const guildId = process.env.DISCORD_GUILD_ID;
console.log("Starting bot...");
const Discord = require("discord.js");
const discordClient = new Discord.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.GuildVoiceStates]
});
const { Player } = require("discord-music-player");
const player = new Player(discordClient, {
    leaveOnEmpty: false,
});
discordClient.player = player;
(0, ReadyEvent_1.default)(discordClient);
(0, InteractionCreateEvent_1.default)(discordClient, player);
discordClient.login(token).then(() => {
    if (!discordClient.user) {
        return;
    }
    console.log(`Logged in as ${discordClient.user.tag}!`);
});
discordClient.player
    .on('channelEmpty', (q) => {
    setTimeout(() => {
        if (q.members.size === 0) {
            q.leave();
        }
    }, 300000);
});
