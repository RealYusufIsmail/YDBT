import { Command } from "./Command";
import { Ping } from "./commands/Ping";
import fs from "node:fs";

export const Commands: Command[] = [Ping];

export const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".ts"));