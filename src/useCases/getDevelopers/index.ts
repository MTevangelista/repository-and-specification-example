import { DeveloperRepository } from "../../repository/implementations/DeveloperRepository"
import { GetDevelopersController } from "./GetDevelopersController"
import { GetDevelopersUseCase } from "./GetDevelopersUseCase"

const developerRepository = new DeveloperRepository()

const getDevelopersUseCase = new GetDevelopersUseCase(developerRepository)
const getDevelopersController = new GetDevelopersController(getDevelopersUseCase)

export { getDevelopersUseCase, getDevelopersController }