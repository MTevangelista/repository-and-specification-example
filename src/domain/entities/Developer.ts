import { Entity } from "./Entity"

enum DeveloperSkills {
    Swift = "Swift",
    SwiftUI = "SwiftUI",
    Typescript = "Typescript",
    NodeJs = "NodeJs",
    ReactJs = "ReactJs"
}

interface DeveloperProps {
    name: string
    skills: DeveloperSkills[]
}

export class Developer extends Entity<DeveloperProps> {
    private constructor(props: DeveloperProps, id?: string) {
        super(props, id)
    }

    public static create(props: DeveloperProps, id?: string): Developer {
        const developer = new Developer(props, id)
        return developer
    } 
}