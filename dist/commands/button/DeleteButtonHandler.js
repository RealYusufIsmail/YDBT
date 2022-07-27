"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteButtonHandler = void 0;
exports.DeleteButtonHandler = {
    customId: 'delete',
    run: async (client, interaction) => {
        await interaction.message.delete();
    }
};
