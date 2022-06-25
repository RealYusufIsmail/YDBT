import { Client, Intents } from "discord.js";
import * as dotenv from 'dotenv';
import InteractionCreateEvent from "./listeners/InteractionCreateEvent";
import ReadyEvent from "./listeners/ReadyEvent";

dotenv.config();

const token = process.env.DISCORD_TOKEN;
const guildId = process.env.DISCORD_GUILD_ID;

console.log("Starting bot...");

const client = new Client({
    intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_PRESENCES],
});

ReadyEvent(client, token, guildId);
InteractionCreateEvent(client);

client.login(token);
