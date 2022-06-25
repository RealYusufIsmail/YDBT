import { Command } from "./Command";
import { Ping } from "./commands/Ping";
import fs from "node:fs";

export const Commands: Command[] = [Ping];
