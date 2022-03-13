import { Express } from "express"
import { AppMiddleware } from "../middleware/AppMiddleware"

export class AppConfig {
    private app: Express
    private appMiddleware: AppMiddleware

    public constructor(app: Express) {
        this.app = app
        this.appMiddleware = new AppMiddleware(app)
    }

    execute() {
        this.appMiddleware.handle()
    }
}
