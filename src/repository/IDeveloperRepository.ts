import { Developer } from "../domain/entities/Developer"

export interface IDeveloperRepository {
    //findByEmail(email: string): Promise<Developer | undefined>
    save(developer: Developer): Promise<void>
    getAll(): Promise<Developer[]>
}