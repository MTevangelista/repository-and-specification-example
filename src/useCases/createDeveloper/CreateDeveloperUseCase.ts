import { Developer } from "../../domain/entities/Developer";
import { IDeveloperRepository } from "../../repository/IDeveloperRepository";
import { ICreateDeveloperRequestDTO } from "./ICreateDeveloperRequestDTO";

export class CreateDeveloperUseCase {
    private developerRepository: IDeveloperRepository

    constructor(developerRepository: IDeveloperRepository) {
        this.developerRepository = developerRepository
    }

    public async execute(data: ICreateDeveloperRequestDTO) {        
        const developer = Developer.create(data)

        try {
            await this.developerRepository.save(developer)
        } catch (err) {
            throw new Error(`An unexpected error occurred: ${err}`)
        }
    }
}