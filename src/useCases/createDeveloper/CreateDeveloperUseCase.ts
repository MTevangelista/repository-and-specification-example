import { DeveloperFactory } from "../../domain/entities/DeveloperFactory";
import { IDeveloperRepository } from "../../repository/IDeveloperRepository";
import { ICreateDeveloperRequestDTO } from "./ICreateDeveloperRequestDTO";

export class CreateDeveloperUseCase {
    constructor(
        private readonly repository: IDeveloperRepository
    ) {}

    public async execute(data: ICreateDeveloperRequestDTO) {        
        const developer = DeveloperFactory.create(data)

        try {
            await this.repository.save(developer)
        } catch (err) {
            throw new Error(`An unexpected error occurred: ${err}`)
        }
    }
}