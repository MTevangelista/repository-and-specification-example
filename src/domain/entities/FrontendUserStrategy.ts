import { IMonthlyPaymentStrategy } from "../interfaces/IMonthlyPaymentStrategy";

export class FrontendUserStrategy implements IMonthlyPaymentStrategy {
    applyeMonthlyPaymentInterest(value: number): number {
        return value * 4
    }
}