import { DeveloperType } from "../enum/DeveloperType"

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

    // public static create(props: IDeveloperProps): Developer {
    //     const developer = new Developer(props)
    //     return developer
    // } 
}