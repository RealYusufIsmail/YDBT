import { GetCommandsButtonHandler } from '../../commands/button/GetCommandsButtonHandler';
import { IButton } from './Button';
import { DeleteButtonHandler } from '../../commands/button/DeleteButtonHandler';
import { HandelUptimeButton } from '../../commands/button/HandelUptimeButton';
import { Page2Handler } from '../../commands/button/command/Page2Handler';

export const RegButtons: IButton[] = [
  GetCommandsButtonHandler,
  DeleteButtonHandler,
  HandelUptimeButton,
  Page2Handler
];
