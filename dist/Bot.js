"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandFiles = exports.Commands = void 0;
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const dotenv = tslib_1.__importStar(require("dotenv"));
const InteractionCreateEvent_1 = tslib_1.__importDefault(require("./listeners/InteractionCreateEvent"));
const ReadyEvent_1 = tslib_1.__importDefault(require("./listeners/ReadyEvent"));
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const node_fs_1 = tslib_1.__importDefault(require("node:fs"));
dotenv.config();
const token = process.env.DISCORD_TOKEN;
const guildId = process.env.DISCORD_GUILD_ID;
console.log("Starting bot...");
const client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILD_MESSAGES, discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES, discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS, discord_js_1.Intents.FLAGS.GUILD_PRESENCES],
});
(0, ReadyEvent_1.default)(client);
(0, InteractionCreateEvent_1.default)(client);
exports.Commands = [];
exports.commandFiles = node_fs_1.default.readdirSync("./src/commands").filter(file => file.endsWith(".ts"));
if (token == null) {
    throw new Error("Token is null");
}
else if (guildId == null) {
    throw new Error("GuildId is null");
}
const rest = new rest_1.REST({ version: '10' }).setToken(token);
let guildOnly = false;
for (const file of exports.commandFiles) {
    const command = require(`./commands/${file}`);
    exports.Commands.push(command.builder.toJSON());
    if (command.builder.guildOnly) {
        guildOnly = true;
    }
    else {
        guildOnly = false;
    }
}
;
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        if (guildOnly && client.application != null) {
            await rest.put(v9_1.Routes.applicationGuildCommands(client.application.id, guildId), { body: exports.Commands });
            console.log('Successfully reloaded guild application (/) commands.');
        }
        else if (!guildOnly && client.application != null) {
            await rest.put(v9_1.Routes.applicationCommands((client.application.id)), { body: exports.Commands });
            console.log('Successfully reloaded global application (/) commands.');
        }
    }
    catch (error) {
        console.error(error);
    }
})();
client.login(token);
