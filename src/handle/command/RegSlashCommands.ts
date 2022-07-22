import {ISlashCommand} from "./ISlashCommand";
import {Info} from "../../commands/info";
import {Ping} from "../../commands/Ping";
import {Ban} from "../../commands/moderation/Ban";
import {UnBan} from "../../commands/moderation/UnBan";
import {UserInfo} from "../../commands/UserInfo";
import {Kick} from "../../commands/moderation/Kick";
import {Help} from "../../commands/Help";
import {DeleteMessages} from "../../commands/moderation/DeleteMessages";
import {TimeOut} from "../../commands/moderation/TimeOut";

export const RegSlashCommands: ISlashCommand[] = [Help, Ping, UserInfo, Info, Ban, UnBan, Kick, DeleteMessages, TimeOut];

//get commands as a List
export const getCommands = (): ISlashCommand[] => {
    return RegSlashCommands;
}
