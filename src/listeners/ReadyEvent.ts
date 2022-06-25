import { Client } from "discord.js";
import { Commands, commandFiles } from "../Commands";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9"
import { Ping } from "src/commands/Ping";
import { Command } from "src/Command";

export default (client: Client, token?: string | undefined, guildId?: string | undefined): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        if (token == null) {
            throw new Error("Token is null");
        } else if (guildId == null) {
            throw new Error("GuildId is null");
        }

        const rest = new REST({ version: '10' }).setToken(token);

        for (const file of commandFiles) {
            const command : Command = (await import(`../commands/${file}`));

            Commands.push(command.builder.toJSON());

            (async () => {
                try {
                    console.log('Started refreshing application (/) commands.');

                    if (command.isGuildOnly && client.application != null) {
                        await rest.put(Routes.applicationGuildCommands(client.application.id, guildId),
                            { body: Commands },
                        );

                        console.log('Successfully reloaded guild application (/) commands.');
                    } else if (!command.isGuildOnly && client.application != null) {
                        await rest.put(Routes.applicationCommands((client.application.id)),
                            { body: Commands },
                        );

                        console.log('Successfully reloaded global application (/) commands.');
                    }
                } catch (error) {
                    console.error(error);
                }
            })();
        };

        console.log(`Logged in as ${client.user.tag}!`);
    });
}