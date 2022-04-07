import { IMonthlyPaymentStrategy } from "../interfaces/IMonthlyPaymentStrategy";

export class InterestCalculator {
    constructor(
        private strategy: IMonthlyPaymentStrategy
    ) {}

    execute(value: number): number {
        return this.strategy.applyeMonthlyPaymentInterest(value)
    }
}