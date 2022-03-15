import { DeveloperRepository } from "../../repository/implementations/DeveloperRepository"
import { CreateDeveloperController } from "./CreateDeveloperController"
import { CreateDeveloperUseCase } from "./CreateDeveloperUseCase"

const developerRepository = new DeveloperRepository()

const createDeveloperUseCase = new CreateDeveloperUseCase(developerRepository)
const createDeveloperController = new CreateDeveloperController(createDeveloperUseCase)

export { createDeveloperUseCase, createDeveloperController }