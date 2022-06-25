import { Command } from "./Command";
import { Ping } from "./commands/Ping";
import fs from "node:fs";

export const Commands: Command[] = [];

export const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".ts"));