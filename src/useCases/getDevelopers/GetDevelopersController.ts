import { Request, Response } from "express"
import { GetDevelopersUseCase } from "./GetDevelopersUseCase"

export class GetDevelopersController {
    private getDevelopersUseCase: GetDevelopersUseCase

    constructor(getDevelopersUseCase: GetDevelopersUseCase) {
        this.getDevelopersUseCase = getDevelopersUseCase
    }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const developers = await this.getDevelopersUseCase.execute()
            return response.json(developers)
        } catch (err) {
            return response.status(400).json({
                message: err || 'An unexpected error occurred'
            })
        }
    }
}