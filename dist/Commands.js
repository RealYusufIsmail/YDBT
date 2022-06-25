"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandFiles = exports.Commands = void 0;
const tslib_1 = require("tslib");
const Ping_1 = require("./commands/Ping");
const node_fs_1 = tslib_1.__importDefault(require("node:fs"));
exports.Commands = [Ping_1.Ping];
exports.commandFiles = node_fs_1.default.readdirSync("./src/commands").filter(file => file.endsWith(".ts"));
