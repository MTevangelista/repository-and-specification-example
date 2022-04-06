import { MongoDbDeveloperRepository } from "../../repository/implementations/MongoDbDeveloperRepository"
import { CreateDeveloperController } from "./CreateDeveloperController"
import { CreateDeveloperUseCase } from "./CreateDeveloperUseCase"

const mongoDbDeveloperRepository = new MongoDbDeveloperRepository()

const createDeveloperUseCase = new CreateDeveloperUseCase(mongoDbDeveloperRepository)
const createDeveloperController = new CreateDeveloperController(createDeveloperUseCase)

export { createDeveloperUseCase, createDeveloperController }