import { WithId } from "mongodb"
import { Developer } from "../domain/entities/Developer"

export interface IDeveloperRepository {
    save(developer: Developer): Promise<void>
    getAll(): Promise<WithId<Developer>[]>
}