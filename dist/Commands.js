"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commands = void 0;
const info_1 = require("./commands/info");
const Ping_1 = require("./commands/Ping");
const Ban_1 = require("./commands/moderation/Ban");
exports.Commands = [Ping_1.Ping, info_1.Info, Ban_1.Ban];
