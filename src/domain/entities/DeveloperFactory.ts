import { Developer, IDeveloperProps } from "./Developer";

export class DeveloperFactory {
    static create(props: IDeveloperProps): Developer {
        return new Developer(props.name, props.email, props.type, props.monthlyPayment)
    }
}