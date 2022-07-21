"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const dotenv = tslib_1.__importStar(require("dotenv"));
const InteractionCreateEvent_1 = tslib_1.__importDefault(require("./listeners/InteractionCreateEvent"));
const ReadyEvent_1 = tslib_1.__importDefault(require("./listeners/ReadyEvent"));
dotenv.config();
const token = process.env.DISCORD_TOKEN;
const guildId = process.env.DISCORD_GUILD_ID;
console.log("Starting bot...");
const client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds]
});
(0, ReadyEvent_1.default)(client);
(0, InteractionCreateEvent_1.default)(client);
client.login(token);
