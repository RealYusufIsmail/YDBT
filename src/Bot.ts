import {GatewayIntentBits} from "discord.js";
import * as dotenv from 'dotenv';
import InteractionCreateEvent from "./listeners/InteractionCreateEvent";
import ReadyEvent from "./listeners/ReadyEvent";


dotenv.config();

const token = process.env.DISCORD_TOKEN;
console.log("Starting bot...");

const Discord = require("discord.js");
const discordClient = new Discord.Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates]
});

const {Player} = require("discord-music-player");
const player = new Player(discordClient, {
    leaveOnEmpty: false, // This options are optional.
});

discordClient.player = player;

const { MongoClient } = require('mongodb');

const url =  process.env.DB_CONN_STRING;
const client = new MongoClient(url);

const dbName = 'ydbt';

let db = null;

async function main() {
    // Use connect method to connect to the server
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

ReadyEvent(discordClient);
InteractionCreateEvent(discordClient, player, db);


discordClient.login(token).then(async () => {
    if (!discordClient.user) {
        return;
    }

    console.log(`Logged in as ${discordClient.user.tag}!`);
});

discordClient.player
    .on('channelEmpty', (q: { members: { size: number; }; clear: () => void; leave: () => void; }) => {
        //wait 5 minutes before leaving the channel
        setTimeout(() => {
            //check if the channel is empty
            if (q.members.size === 0) {
                q.clear();
                q.leave();
            }
        } , 300000);
    });


//yarn start