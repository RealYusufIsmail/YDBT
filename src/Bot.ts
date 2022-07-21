import {Client, GatewayIntentBits} from "discord.js";
import * as dotenv from 'dotenv';
import InteractionCreateEvent from "./listeners/InteractionCreateEvent";
import ReadyEvent from "./listeners/ReadyEvent";


dotenv.config();

const token = process.env.DISCORD_TOKEN;
const guildId = process.env.DISCORD_GUILD_ID;

console.log("Starting bot...");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

ReadyEvent(client);
InteractionCreateEvent(client);


client.login(token).then(() => {

    if (!client.user) {
        return;
    }

    console.log(`Logged in as ${client.user.tag}!`);
} ).catch(err => {
    console.error(err);
});

//yarn start