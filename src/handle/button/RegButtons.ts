import {GetCommandsButtonHandler} from "../../commands/button/GetCommandsButtonHandler";
import {IButton} from "./Button";
import {DeleteButtonHandler} from "../../commands/button/DeleteButtonHandler";
import {HandelUptimeButton} from "../../commands/button/HandelUptimeButton";

export const RegButtons : IButton[] = [GetCommandsButtonHandler, DeleteButtonHandler, HandelUptimeButton];