import {Client, MessageComponentInteraction} from "discord.js";

export interface IButton {
    customId : string;

    run: (client: Client, interaction: MessageComponentInteraction) => Promise<void>;
}
