"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommands = exports.RegSlashCommands = void 0;
const info_1 = require("../../commands/info");
const Ping_1 = require("../../commands/Ping");
const Ban_1 = require("../../commands/moderation/Ban");
const UnBan_1 = require("../../commands/moderation/UnBan");
const UserInfo_1 = require("../../commands/UserInfo");
const Kick_1 = require("../../commands/moderation/Kick");
const Help_1 = require("../../commands/Help");
const DeleteMessages_1 = require("../../commands/moderation/DeleteMessages");
const TimeOut_1 = require("../../commands/moderation/TimeOut");
const Play_1 = require("../../commands/music/Play");
const PlayList_1 = require("../../commands/music/PlayList");
const RemoveLoop_1 = require("../../commands/music/RemoveLoop");
const ToggleLoop_1 = require("../../commands/music/ToggleLoop");
const Skip_1 = require("../../commands/music/Skip");
const Stop_1 = require("../../commands/music/Stop");
const ToggleQueueLoop_1 = require("../../commands/music/ToggleQueueLoop");
const GetQueue_1 = require("../../commands/music/GetQueue");
const ClearQueue_1 = require("../../commands/music/ClearQueue");
const Pause_1 = require("../../commands/music/Pause");
const Resume_1 = require("../../commands/music/Resume");
const NowPlaying_1 = require("../../commands/music/NowPlaying");
const SongProgress_1 = require("../../commands/music/SongProgress");
exports.RegSlashCommands = [
    Help_1.Help,
    Ping_1.Ping,
    UserInfo_1.UserInfo,
    info_1.Info,
    Ban_1.Ban,
    UnBan_1.UnBan,
    Kick_1.Kick,
    DeleteMessages_1.DeleteMessages,
    TimeOut_1.TimeOut,
    Play_1.Play,
    PlayList_1.PlayList,
    RemoveLoop_1.RemoveLoop,
    ToggleLoop_1.ToggleLoop,
    ToggleQueueLoop_1.ToggleQueueLoop,
    Skip_1.Skip,
    Stop_1.Stop,
    GetQueue_1.GetQueue,
    ClearQueue_1.ClearQueue,
    Pause_1.Pause,
    Resume_1.Resume,
    NowPlaying_1.NowPlaying,
    SongProgress_1.SongProgress
];
const getCommands = () => {
    return exports.RegSlashCommands;
};
exports.getCommands = getCommands;
