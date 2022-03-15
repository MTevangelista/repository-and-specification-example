import { IDeveloperRepository } from "../../repository/IDeveloperRepository";

export class GetDevelopersUseCase {
    private developerRepository: IDeveloperRepository

    constructor(developerRepository: IDeveloperRepository) {
        this.developerRepository = developerRepository
    }

    public async execute() {        
        try {
            const developers = await this.developerRepository.getAll()
            return developers
        } catch (err) {
            throw new Error(`An unexpected error occurred: ${err}`)
        }
    }
}