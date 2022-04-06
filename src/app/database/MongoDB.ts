import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { Collection, MongoClient } from "mongodb";

dotenv.config();

export class MongoDB {
    private static client: mongoDB.MongoClient = new MongoClient(process.env.MONGO_URI || "")

    static async connect(): Promise<void> {
        console.log("Trying to connect with MongoDB to run server...");
        await this.client.connect()
    }

    static getCollection(name: string): Collection {
        return MongoDB.client.db().collection(name)
    }
}