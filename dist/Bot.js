"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const dotenv = tslib_1.__importStar(require("dotenv"));
const InteractionCreateEvent_1 = tslib_1.__importDefault(require("./listeners/InteractionCreateEvent"));
const ReadyEvent_1 = tslib_1.__importDefault(require("./listeners/ReadyEvent"));
dotenv.config();
const token = process.env.DISCORD_TOKEN;
console.log('Starting bot...');
const Discord = require('discord.js');
const discordClient = new Discord.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.GuildVoiceStates
    ]
});
const { Player } = require('discord-music-player');
const player = new Player(discordClient, {
    leaveOnEmpty: false
});
discordClient.player = player;
const { MongoClient } = require('mongodb');
const url = process.env.DB_CONN_STRING;
const client = new MongoClient(url);
const dbName = 'ydbt';
let db = null;
async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName);
    discordClient.db = db;
    return 'done.';
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
(0, ReadyEvent_1.default)(discordClient);
if (db == null) {
    console.error('Could not connect to database');
}
(0, InteractionCreateEvent_1.default)(discordClient, player, db);
discordClient.login(token).then(async () => {
    if (!discordClient.user) {
        return;
    }
    console.log(`Logged in as ${discordClient.user.tag}!`);
});
discordClient.player.on('channelEmpty', (q) => {
    setTimeout(() => {
        if (q.members.size === 0) {
            q.clear();
            q.leave();
        }
    }, 300000);
});
