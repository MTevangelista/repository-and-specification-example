import { Developer } from "../../domain/entities/Developer";
import { Skill } from "../../domain/enum/Skill";
import { IDeveloperRepository } from "../IDeveloperRepository";

export class DeveloperRepository implements IDeveloperRepository {
    private developer1 = Developer.create({
        name: "Teste",
        skills: [
            Skill.Swift,
            Skill.SwiftUI
        ]
    })

    private developers: Developer[] = [this.developer1]
    
    async save(developer: Developer): Promise<void> {
        this.developers.push(developer)
        console.log(this.developers)
    }

    async getAll(): Promise<Developer[]> {
        console.log(this.developers)
        return this.developers
    }
}