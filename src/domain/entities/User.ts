import mongoose, { Document, Schema } from "mongoose"
import { UserType } from "../enum/UserType"

interface IUser extends Document {
    name: string
    email: string
    type: UserType
    monthlyPayment: number
}

const schema = new Schema<IUser>({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    type: {
        type: String,
        require: true,
        trim: true
    },
    monthlyPayment: {
        type: Number,
        require: true,
        trim: true
    },
})

const User = mongoose.model("User", schema)

export { User }
