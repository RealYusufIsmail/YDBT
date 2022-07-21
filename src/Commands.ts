import {Command} from "./Command";
import {Info} from "./commands/info";
import {Ping} from "./commands/Ping";
import {Ban} from "./commands/moderation/Ban";

export const Commands: Command[] = [Ping, Info, Ban];
