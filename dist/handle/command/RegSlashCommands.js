"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommands = exports.RegSlashCommands = void 0;
const info_1 = require("../../commands/info");
const Ping_1 = require("../../commands/Ping");
const Ban_1 = require("../../commands/moderation/Ban");
const UnBan_1 = require("../../commands/moderation/UnBan");
const UserInfo_1 = require("../../commands/UserInfo");
const Kick_1 = require("../../commands/moderation/Kick");
const Help_1 = require("../../commands/Help");
const DeleteMessages_1 = require("../../commands/moderation/DeleteMessages");
const TimeOut_1 = require("../../commands/moderation/TimeOut");
exports.RegSlashCommands = [Help_1.Help, Ping_1.Ping, UserInfo_1.UserInfo, info_1.Info, Ban_1.Ban, UnBan_1.UnBan, Kick_1.Kick, DeleteMessages_1.DeleteMessages, TimeOut_1.TimeOut];
const getCommands = () => {
    return exports.RegSlashCommands;
};
exports.getCommands = getCommands;
