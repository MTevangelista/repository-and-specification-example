import { InsertOneResult } from "mongodb";
import { IDeveloperProps } from "../../domain/entities/Developer";
import { DeveloperFactory } from "../../domain/entities/DeveloperFactory";
import { InvalidNameError } from "../../domain/errors/InvalidName";
import { Name } from "../../domain/valueObject/Name";
import { IDeveloperRepository } from "../../repository/IDeveloperRepository";
import { Either, left, right } from "../../shared/either/Either";

type CreateUserUseCaseResponse = Promise<Either<InvalidNameError, InsertOneResult<Document>>>

export class CreateDeveloperUseCase {
    constructor(
        private readonly repository: IDeveloperRepository
    ) {}

    public async execute(data: IDeveloperProps): CreateUserUseCaseResponse {   
        let { name, email, type, monthlyPayment  } = data 
        const nameOrError = Name.create(data.name)

        if (nameOrError.isLeft()) {
            return left(nameOrError.value);
        }

        name = nameOrError.value.getName()
        
        const developer = DeveloperFactory.create({ name, email, type, monthlyPayment  })

        try {
            const response = await this.repository.save(developer)
            return right(response);
        } catch (err) {
            throw new Error(`An unexpected error occurred: ${err}`)
        }
    }
}