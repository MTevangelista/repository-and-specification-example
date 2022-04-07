import { Document } from "mongoose"
import { User } from "../../domain/entities/User"
import { ICreateUserRequestDTO } from "../../useCases/createUser/ICreateUserRequestDTO"
import { IUserRepository } from "../IUserRepository"

export class UserRepository implements IUserRepository {
    async fetchUsers(): Promise<Document[]> {
        const response = await User.find()
        return response
    }

    async save(user: ICreateUserRequestDTO): Promise<ICreateUserRequestDTO> {
        const response = await User.create(user)
        return response
    }
}