"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegButtons = void 0;
const GetCommandsButtonHandler_1 = require("../../commands/button/GetCommandsButtonHandler");
const DeleteButtonHandler_1 = require("../../commands/button/DeleteButtonHandler");
const HandelUptimeButton_1 = require("../../commands/button/HandelUptimeButton");
const Page2Handler_1 = require("../../commands/button/command/Page2Handler");
exports.RegButtons = [
    GetCommandsButtonHandler_1.GetCommandsButtonHandler,
    DeleteButtonHandler_1.DeleteButtonHandler,
    HandelUptimeButton_1.HandelUptimeButton,
    Page2Handler_1.Page2Handler
];
