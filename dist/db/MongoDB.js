"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateModerationDatabase = void 0;
async function updateModerationDatabase(collection, guildId, userId, reason, type, warn = false) {
    const moderationCollection = collection.collection('moderation');
    if (warn) {
        await moderationCollection.insertOne({
            guildId,
            userId,
            reason,
            type,
            "amount_of_warns": 1,
            date: new Date()
        });
    }
    else {
        await moderationCollection.insertOne({
            guildId,
            userId,
            reason,
            type,
            date: new Date()
        });
    }
}
exports.updateModerationDatabase = updateModerationDatabase;
