export interface IMonthlyPaymentStrategy {
    applyeMonthlyPaymentInterest(value: number): number
}