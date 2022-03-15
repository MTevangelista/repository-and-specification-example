import { Router } from "express"
import { createDeveloperController } from "../../useCases/createDeveloper"
import { getDevelopersController } from "../../useCases/getDevelopers"

const routes = Router()

routes.post("/developers", (request, response) => {
    return createDeveloperController.handle(request, response)
})

routes.get("/developers", (request, response) => {
    return getDevelopersController.handle(request, response)
})

export default routes