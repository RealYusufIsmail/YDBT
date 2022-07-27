"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegSlashCommands_1 = require("../handle/command/RegSlashCommands");
exports.default = (client) => {
    client.on('ready', async () => {
        if (!client.user || !client.application) {
            return;
        }
        await client.application.commands.set(RegSlashCommands_1.RegSlashCommands);
    });
};
