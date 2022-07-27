"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateModerationDatabase = void 0;
async function updateModerationDatabase(collection, user, reason, type) {
    const moderationCollection = collection.collection("moderation");
    const userModeration = await moderationCollection.findOne({ user: user });
    if (userModeration) {
        await moderationCollection.updateOne({ user: user }, { $set: { reason: reason, type: type } });
    }
    else {
        await moderationCollection.insertOne({ user: user, reason: reason, type: type });
    }
}
exports.updateModerationDatabase = updateModerationDatabase;
