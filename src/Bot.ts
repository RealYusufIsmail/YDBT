import {GatewayIntentBits} from "discord.js";
import * as dotenv from 'dotenv';
import InteractionCreateEvent from "./listeners/InteractionCreateEvent";
import ReadyEvent from "./listeners/ReadyEvent";


dotenv.config();

const token = process.env.DISCORD_TOKEN;
const guildId = process.env.DISCORD_GUILD_ID;

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

ReadyEvent(discordClient);
InteractionCreateEvent(discordClient, player);

discordClient.login(token).then(() => {

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