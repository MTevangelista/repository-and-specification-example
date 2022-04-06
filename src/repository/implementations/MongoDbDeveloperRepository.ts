import { InsertOneResult, WithId } from "mongodb";
import { MongoDB } from "../../app/database/MongoDB";
import { Developer } from "../../domain/entities/Developer";
import { IDeveloperRepository } from "../IDeveloperRepository";

export class MongoDbDeveloperRepository implements IDeveloperRepository {
    constructor(
        private developerConnection = MongoDB.getCollection("developers")
    ) {}

    async save(developer: Developer): Promise<InsertOneResult<Document>> {
        const response = await this.developerConnection.insertOne(developer) 
        return response
    }

    async getAll(): Promise<WithId<Developer>[]> {
        return await this.developerConnection.find().toArray()
    }
}