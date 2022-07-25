import * as dotenv from "dotenv";
import * as mongoDB from "mongodb";

export const collections: { games?: mongoDB.Collection } = {}

export async function connectToDatabase () {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!.toString());

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    collections.games = db.collection(process.env.GAMES_COLLECTION_NAME!.toString());
}