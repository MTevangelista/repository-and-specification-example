import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

export class MongoDB {
    private client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGO_URI || "")

    async connect(): Promise<void> {
        console.log("Trying to connect with MongoDB to run server...");
        await this.client.connect()
    }

    getCollection(name: string) {
        return this.client.db().collection(name)
    }

    clearCollection(name: string): void {
        this.client.db().collection(name).deleteMany({})
    }
}