import { Client, Intents } from "discord.js";
import * as dotenv from 'dotenv';
import InteractionCreateEvent from "./listeners/InteractionCreateEvent";
import ReadyEvent from "./listeners/ReadyEvent";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9"
import { Command } from "./Command";
import fs from "node:fs";


dotenv.config();

const token = process.env.DISCORD_TOKEN;
const guildId = process.env.DISCORD_GUILD_ID;

console.log("Starting bot...");

const client = new Client({
    intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_PRESENCES],
});

ReadyEvent(client);
InteractionCreateEvent(client);

export const Commands: Command[] = [];

export const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".ts"));

if (token == null) {
    throw new Error("Token is null");
} else if (guildId == null) {
    throw new Error("GuildId is null");
}

const rest = new REST({ version: '10' }).setToken(token);

let guildOnly : boolean = false;

for (const file of commandFiles) {
    const command  = require(`./commands/${file}`);
    Commands.push(command.builder.toJSON());

    if (command.builder.guildOnly) {
        guildOnly = true;
    } else {
        guildOnly = false;
    }
};

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        if (guildOnly && client.application != null) {
            await rest.put(Routes.applicationGuildCommands(client.application.id, guildId),
                { body: Commands },
            );

            console.log('Successfully reloaded guild application (/) commands.');
        } else if (!guildOnly && client.application != null) {
            await rest.put(Routes.applicationCommands((client.application.id)),
                { body: Commands },
            );

            console.log('Successfully reloaded global application (/) commands.');
        }
    } catch (error) {
        console.error(error);
    }
})();

client.login(token);

//yarn start
