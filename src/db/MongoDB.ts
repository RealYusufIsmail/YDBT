import * as dotenv from 'dotenv';
import * as mongoDB from 'mongodb';
import { Db } from 'mongodb';
import { TypeOfModeration } from './TypeOfModeration';

export async function updateModerationDatabase(
  collection: Db,
  guildId: string,
  userId: string,
  reason: string,
  type: TypeOfModeration
) {
  const moderationCollection = collection.collection('moderation');
  await moderationCollection.insertOne({
    guildId,
    userId,
    reason,
    type,
    date: new Date()
  });
}
