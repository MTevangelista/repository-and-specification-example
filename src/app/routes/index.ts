import { Router } from "express"
import { createUserController } from "../../useCases/createUser"
import { fetchUsersController } from "../../useCases/fetchUsers"

const routes = Router()

routes.post("/users", (request, response) => {
    return createUserController.handle(request, response)
})

routes.get("/users", (request, response) => {
    return fetchUsersController.handle(request, response)
})

export default routes