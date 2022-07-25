"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.collections = void 0;
const tslib_1 = require("tslib");
const dotenv = tslib_1.__importStar(require("dotenv"));
const mongoDB = tslib_1.__importStar(require("mongodb"));
exports.collections = {};
async function connectToDatabase() {
    dotenv.config();
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING.toString());
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    exports.collections.games = db.collection(process.env.GAMES_COLLECTION_NAME.toString());
}
exports.connectToDatabase = connectToDatabase;
