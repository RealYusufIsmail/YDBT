"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const dotenv = tslib_1.__importStar(require("dotenv"));
const ReadyEvent_1 = tslib_1.__importDefault(require("./listeners/ReadyEvent"));
dotenv.config();
console.log("Starting bot...");
const client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILD_MESSAGES, discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES, discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS, discord_js_1.Intents.FLAGS.GUILD_PRESENCES],
});
(0, ReadyEvent_1.default)(client);
client.login(process.env.DISCORD_TOKEN);
