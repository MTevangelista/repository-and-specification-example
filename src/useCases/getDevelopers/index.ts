import { MongoDbDeveloperRepository } from "../../repository/implementations/MongoDbDeveloperRepository"
import { GetDevelopersController } from "./GetDevelopersController"
import { GetDevelopersUseCase } from "./GetDevelopersUseCase"

const mongoDbDeveloperRepository = new MongoDbDeveloperRepository()

const getDevelopersUseCase = new GetDevelopersUseCase(mongoDbDeveloperRepository)
const getDevelopersController = new GetDevelopersController(getDevelopersUseCase)

export { getDevelopersUseCase, getDevelopersController }