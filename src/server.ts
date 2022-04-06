import app from "./app/app"
import { MongoDB } from "./app/database/MongoDB"

const port = 3333
const mongoDB = new MongoDB()
mongoDB.connect()
    .then(() => {
        console.log('MongoDB connected')
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    })
    .catch((error) => {
        `Connection error: ${error}`
    })
