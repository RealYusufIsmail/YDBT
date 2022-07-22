import {IButton} from "../../handle/button/Button";

export const DeleteButtonHandler: IButton = {
    customId: "delete",

    run: async (client, interaction) => {
        await interaction.message.delete();
    }
}