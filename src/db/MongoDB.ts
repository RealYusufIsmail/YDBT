import * as dotenv from 'dotenv';
import * as mongoDB from 'mongodb';
import { Db } from 'mongodb';
import { TypeOfModeration } from './TypeOfModeration';

export async function updateModerationDatabase(
  collection: Db,
  user: string,
  reason: string,
  type: TypeOfModeration
) {
  const moderationCollection = collection.collection('moderation');
  const userModeration = await moderationCollection.findOne({ user: user });
  if (userModeration) {
    await moderationCollection.updateOne(
      { user: user },
      { $set: { reason: reason, type: type } }
    );
  } else {
    await moderationCollection.insertOne({
      user: user,
      reason: reason,
      type: type
    });
  }
}
