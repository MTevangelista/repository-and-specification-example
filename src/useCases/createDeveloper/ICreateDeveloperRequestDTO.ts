import { DeveloperType } from "../../domain/enum/DeveloperType"

export interface ICreateDeveloperRequestDTO {
    name: string
    email: string
    type: DeveloperType
    monthlyPayment: number
}