import { Request, Response } from "express"
import { CreateDeveloperUseCase } from "./CreateDeveloperUseCase"

export class CreateDeveloperController {
    private createDeveloperUseCase: CreateDeveloperUseCase

    constructor(createDeveloperUseCase: CreateDeveloperUseCase) {
        this.createDeveloperUseCase = createDeveloperUseCase
    }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createDeveloperUseCase.execute(request.body)
            return response.status(201).send()
        } catch (err) {
            return response.status(400).json({
                message: err || 'An unexpected error occurred'
            })
        }
    }
}