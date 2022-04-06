import { Request, Response } from "express"
import { CreateDeveloperUseCase } from "./CreateDeveloperUseCase"

export class CreateDeveloperController {
    private createDeveloperUseCase: CreateDeveloperUseCase

    constructor(createDeveloperUseCase: CreateDeveloperUseCase) {
        this.createDeveloperUseCase = createDeveloperUseCase
    }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const userOrError = await this.createDeveloperUseCase.execute(request.body)
            
            if (userOrError.isLeft()) {
                return response.status(400).json({
                    message: userOrError.value.message
                })
            }
            return response.status(201).json(userOrError.value)
        } catch (err) {
            return response.status(400).json({
                message: err || 'An unexpected error occurred'
            })
        }
    }
}