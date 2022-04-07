import { UserType } from "../../domain/enum/UserType"

export interface ICreateUserRequestDTO {
    name: string
    email: string
    type: string
    monthlyPayment: number
}