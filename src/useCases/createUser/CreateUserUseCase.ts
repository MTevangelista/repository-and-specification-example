import { BackendUserStrategy } from "../../domain/entities/BackEndUserStrategy"
import { InvalidNameError } from "../../domain/entities/errors/InvalidName"
import { FrontendUserStrategy } from "../../domain/entities/FrontendUserStrategy"
import { InterestCalculator } from "../../domain/entities/InterestCalculator"
import { UserFactory } from "../../domain/entities/UserFactory"
import { Name } from "../../domain/entities/valueObject/Name"
import { UserType } from "../../domain/enum/UserType"
import { IUserRepository } from "../../repository/IUserRepository"
import { Either, left, right } from "../../shared/either/Either"
import { AppError } from "../../shared/error/AppError"
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO"

type CreateUserUseCaseResponse = Promise<Either<InvalidNameError, ICreateUserRequestDTO>>

export class CreateUserUseCase {
    constructor(
        private repository: IUserRepository
    ) { }

    async execute(data: ICreateUserRequestDTO): CreateUserUseCaseResponse {
        let {
            name, email, type, monthlyPayment 
        } = data
        const nameOrError = Name.create(name)

        if (nameOrError.isLeft()) {
            return left(nameOrError.value)
        }

        name = nameOrError.value.getName()

        switch (type) {
            case UserType.Backend:
                const backendInterestCalculator = new InterestCalculator(new BackendUserStrategy())
                monthlyPayment = backendInterestCalculator.execute(monthlyPayment)
                break
            case UserType.Frontend:
                const frontendInterestCalculator = new InterestCalculator(new FrontendUserStrategy())
                monthlyPayment = frontendInterestCalculator.execute(monthlyPayment)
                break
        }

        try {
            const user = UserFactory.createWith({
                name, email, type, monthlyPayment 
            })
            const response = await this.repository.save(user)
            return right(response)
        } catch (err) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}