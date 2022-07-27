"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateModerationDatabase = void 0;
async function updateModerationDatabase(collection, guildId, userId, reason, type) {
    const moderationCollection = collection.collection('moderation');
    await moderationCollection.insertOne({
        guildId,
        userId,
        reason,
        type,
        date: new Date()
    });
}
exports.updateModerationDatabase = updateModerationDatabase;
