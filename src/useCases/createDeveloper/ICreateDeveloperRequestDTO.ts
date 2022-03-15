import { Skill } from "../../domain/enum/Skill"

export interface ICreateDeveloperRequestDTO {
    name: string
    skills: Skill[]
}