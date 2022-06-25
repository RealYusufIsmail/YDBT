"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        console.log(`Logged in as ${client.user.tag}!`);
    });
};
