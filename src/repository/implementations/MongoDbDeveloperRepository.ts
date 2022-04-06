// import { MongoDBFactory } from "../../app/database/MongoDbFactory";
import { WithId } from "mongodb";
import { MongoDB } from "../../app/database/MongoDB";
import { Developer } from "../../domain/entities/Developer";
import { IDeveloperRepository } from "../IDeveloperRepository";

export class MongoDbDeveloperRepository implements IDeveloperRepository {
    constructor(
        private developerConnection = MongoDB.getCollection("developers")
    ) {}

    async save(developer: Developer): Promise<void> {
        await this.developerConnection.insertOne(developer) 
    }

    async getAll(): Promise<WithId<Developer>[]> {
        return await this.developerConnection.find().toArray()
    }
}