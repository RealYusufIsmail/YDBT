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
import {Play} from "../../commands/music/Play";
import {PlayList} from "../../commands/music/PlayList";
import {RemoveLoop} from "../../commands/music/RemoveLoop";
import {ToggleLoop} from "../../commands/music/ToggleLoop";
import {Skip} from "../../commands/music/Skip";
import {Stop} from "../../commands/music/Stop";
import {ToggleQueueLoop} from "../../commands/music/ToggleQueueLoop";
import {GetQueue} from "../../commands/music/GetQueue";

export const RegSlashCommands: ISlashCommand[] = [Help, Ping, UserInfo, Info, Ban, UnBan, Kick, DeleteMessages, TimeOut, Play, PlayList, RemoveLoop, ToggleLoop, ToggleQueueLoop, Skip, Stop, GetQueue];

//get commands as a List
export const getCommands = (): ISlashCommand[] => {
    return RegSlashCommands;
}
