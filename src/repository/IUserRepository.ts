import { Document } from "mongoose"
import { ICreateUserRequestDTO } from '../useCases/createUser/ICreateUserRequestDTO'

export interface IUserRepository {
    fetchUsers(): Promise<Document[]>
    save(data: ICreateUserRequestDTO): Promise<ICreateUserRequestDTO>
}