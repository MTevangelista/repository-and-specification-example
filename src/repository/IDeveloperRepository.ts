import { InsertOneResult, WithId } from "mongodb"
import { Developer } from "../domain/entities/Developer"

export interface IDeveloperRepository {
    save(developer: Developer): Promise<InsertOneResult<Document>>
    getAll(): Promise<WithId<Developer>[]>
}