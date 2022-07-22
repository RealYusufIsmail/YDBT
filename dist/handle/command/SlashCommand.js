"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommands = exports.SlashCommand = void 0;
const info_1 = require("../../commands/info");
const Ping_1 = require("../../commands/Ping");
const Ban_1 = require("../../commands/moderation/Ban");
const UnBan_1 = require("../../commands/moderation/UnBan");
const UserInfo_1 = require("../../commands/UserInfo");
const Kick_1 = require("../../commands/moderation/Kick");
const Help_1 = require("../../commands/Help");
exports.SlashCommand = [Ping_1.Ping, info_1.Info, Ban_1.Ban, UnBan_1.UnBan, UserInfo_1.UserInfo, Kick_1.Kick, Help_1.Help];
const getCommands = () => {
    return exports.SlashCommand;
};
exports.getCommands = getCommands;
