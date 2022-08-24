import * as dotenv from 'dotenv';
import * as mongoDB from 'mongodb';
import { Db } from 'mongodb';
import { TypeOfModeration } from './TypeOfModeration';

export async function updateModerationDatabase(
  collection: Db,
  guildId: string,
  userId: string,
  reason: string,
  type: TypeOfModeration,
  warn : boolean = false
) {
  const moderationCollection = collection.collection('moderation');

  if (warn) {
    await moderationCollection.insertOne({
      guildId,
      userId,
      reason,
      type,
      "amount_of_warns" : 1,
      date: new Date()
    });
  } else {
    await moderationCollection.insertOne({
      guildId,
      userId,
      reason,
      type,
      date: new Date()
    });
  }
}