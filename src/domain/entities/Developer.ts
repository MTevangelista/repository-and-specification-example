import { DeveloperType } from "../enum/DeveloperType"
import { Name } from "../valueObject/Name"

export interface IDeveloperProps {
    name: string
    email: string
    type: DeveloperType
    monthlyPayment: number
}

export class Developer {
    constructor(
        private name: string,
        private readonly email: string,
        private readonly type: DeveloperType,
        private readonly monthlyPayment: number
    ) {}
}