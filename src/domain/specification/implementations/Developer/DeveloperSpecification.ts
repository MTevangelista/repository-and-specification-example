import { Developer } from "../../../entities/Developer";
import { Skill } from "../../../enum/Skill";
import { Specification } from "../../Specification";


export class DeveloperHasMobileSpecification extends Specification<Developer> {
    constructor() {
        super()
    }

    isSatisfiedBy(developer: Developer): boolean {
        const developerSkills = developer.getSkills()

        return developerSkills.includes(Skill.Swift) && developerSkills.includes(Skill.SwiftUI)
    }
}

export class DeveloperHasFrontendSpecification extends Specification<Developer> {
    constructor() {
        super()
    }

    isSatisfiedBy(developer: Developer): boolean {
        const developerSkills = developer.getSkills()

        return developerSkills.includes(Skill.ReactJs) && developerSkills.includes(Skill.Typescript)
    }
}

export class DeveloperHasBackendSpecification extends Specification<Developer> {
    constructor() {
        super()
    }

    isSatisfiedBy(developer: Developer): boolean {
        const developerSkills = developer.getSkills()

        return developerSkills.includes(Skill.NodeJs) && developerSkills.includes(Skill.Typescript)
    }
}

export class DeveloperHasFullStackSpecification extends Specification<Developer> {
    constructor() {
        super()
    }

    isSatisfiedBy(developer: Developer): boolean {
        return new DeveloperHasFrontendSpecification()
            .add(new DeveloperHasBackendSpecification())
            .isSatisfiedBy(developer)
    }
}

export class DeveloperHasMobileOrBackendSpecification extends Specification<Developer> {
    constructor() {
        super()
    }

    isSatisfiedBy(developer: Developer): boolean {
        return new DeveloperHasMobileSpecification()
            .or(new DeveloperHasBackendSpecification())
            .isSatisfiedBy(developer)
    }
}