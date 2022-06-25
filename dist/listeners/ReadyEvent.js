"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Commands_1 = require("../Commands");
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
exports.default = (client, token, guildId) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        if (token == null) {
            throw new Error("Token is null");
        }
        else if (guildId == null) {
            throw new Error("GuildId is null");
        }
        const rest = new rest_1.REST({ version: '10' }).setToken(token);
        for (const file of Commands_1.commandFiles) {
            const command = (await Promise.resolve().then(() => __importStar(require(`../commands/${file}`))));
            Commands_1.Commands.push(command.builder.toJSON());
            (async () => {
                try {
                    console.log('Started refreshing application (/) commands.');
                    if (command.isGuildOnly && client.application != null) {
                        await rest.put(v9_1.Routes.applicationGuildCommands(client.application.id, guildId), { body: Commands_1.Commands });
                        console.log('Successfully reloaded guild application (/) commands.');
                    }
                    else if (!command.isGuildOnly && client.application != null) {
                        await rest.put(v9_1.Routes.applicationCommands((client.application.id)), { body: Commands_1.Commands });
                        console.log('Successfully reloaded global application (/) commands.');
                    }
                }
                catch (error) {
                    console.error(error);
                }
            })();
        }
        ;
        console.log(`Logged in as ${client.user.tag}!`);
    });
};
