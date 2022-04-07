import { IMonthlyPaymentStrategy } from "../interfaces/IMonthlyPaymentStrategy";

export class BackendUserStrategy implements IMonthlyPaymentStrategy {
    applyeMonthlyPaymentInterest(value: number): number{
        return value * 2
    }
}