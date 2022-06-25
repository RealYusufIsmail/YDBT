import { Client, Intents } from "discord.js";
import * as dotenv from 'dotenv';
import ReadyEvent from "./listeners/ReadyEvent";

dotenv.config();

console.log("Starting bot...");

const client = new Client({
    intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_PRESENCES],
});

ReadyEvent(client);

client.login(process.env.DISCORD_TOKEN);
