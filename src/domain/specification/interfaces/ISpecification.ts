export interface ISpecification<T> {
    isSatisfiedBy: (target: T) => boolean
    add: (other: ISpecification<T>) => ISpecification<T>
    or: (other: ISpecification<T>) => ISpecification<T>
}