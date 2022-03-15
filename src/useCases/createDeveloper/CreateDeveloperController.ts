import { Request, Response } from "express"
import { CreateDeveloperUseCase } from "./CreateDeveloperUseCase"

export class CreateDeveloperController {
    private createDeveloperUseCase: CreateDeveloperUseCase

    constructor(createDeveloperUseCase: CreateDeveloperUseCase) {
        this.createDeveloperUseCase = createDeveloperUseCase
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, skills } = request.body

        try {
            await this.createDeveloperUseCase.execute({ name, skills })
            return response.status(201).send()
        } catch (err) {
            return response.status(400).json({
                message: err || 'An unexpected error occurred'
            })
        }
    }
}