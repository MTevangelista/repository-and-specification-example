import { ISpecification } from "./interfaces/ISpecification";

export abstract class Specification<T> implements ISpecification<T> {
    abstract isSatisfiedBy(target: T): boolean
    add(other: ISpecification<T>): ISpecification<T> {
        return new AddSpecification<T>(this, other)
    }
    or(other: ISpecification<T>): ISpecification<T> {
        return new OrSpecification<T>(this, other)
    }
}

class AddSpecification<T> extends Specification<T> {
    constructor(
        private readonly left: ISpecification<T>,
        private readonly right: ISpecification<T>
    ) {
        super()
    }

    isSatisfiedBy(target: T): boolean {
        return this.left.isSatisfiedBy(target) && this.right.isSatisfiedBy(target)
    }
}

class OrSpecification<T> extends Specification<T> {
    constructor(
        private readonly left: ISpecification<T>,
        private readonly right: ISpecification<T>
    ) {
        super()
    }

    isSatisfiedBy(target: T): boolean {
        return this.left.isSatisfiedBy(target) || this.right.isSatisfiedBy(target)
    }
}