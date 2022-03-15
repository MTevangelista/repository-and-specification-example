import { Skill } from "../enum/Skill"
import { Entity } from "./Entity"

interface DeveloperProps {
    name: string
    skills: Skill[]
}

export class Developer extends Entity<DeveloperProps> {
    private constructor(props: DeveloperProps, id?: string) {
        super(props, id)
    }

    public static create(props: DeveloperProps, id?: string): Developer {
        const developer = new Developer(props, id)
        return developer
    } 

    getName(): string {
        return this.props.name
    }

    getSkills(): Skill[] {
        return this.props.skills
    }
}