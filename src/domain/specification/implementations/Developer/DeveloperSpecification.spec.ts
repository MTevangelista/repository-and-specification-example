import { Developer } from "../../../entities/Developer"
import { Skill } from "../../../enum/Skill"
import { DeveloperHasBackendSpecification, DeveloperHasFrontendSpecification, DeveloperHasMobileOrBackendSpecification, DeveloperHasMobileSpecification } from "./DeveloperSpecification"

describe("DeveloperSpecificationSpec", () => {
    describe("Developer should has iOS skills", () => {   
        let sut: DeveloperHasMobileSpecification = new DeveloperHasMobileSpecification()   
        
        it("should return true if developer has iOS skills", () => {
            const developer = Developer.create({
                name: "Matheus Mobile iOS Developer",
                skills: [Skill.Swift, Skill.SwiftUI]
            })
            const result = sut.isSatisfiedBy(developer)

            expect(result).toBe(true)
        })
    })

    describe("Developer should has frontend skills", () => {
        let sut: DeveloperHasFrontendSpecification = new DeveloperHasFrontendSpecification() 

        it("should return true if developer has frontend skills", () => {
            const developer = Developer.create({
                name: "Matheus Frontend Developer",
                skills: [Skill.ReactJs, Skill.Typescript]
            })
            const result = sut.isSatisfiedBy(developer)

            expect(result).toBe(true)
        })
    })

    describe("Developer should has backend skills", () => {
        let sut: DeveloperHasBackendSpecification = new DeveloperHasBackendSpecification() 

        it("should return true if developer has backend skills", () => {
            const developer = Developer.create({
                name: "Matheus Backend Developer",
                skills: [Skill.NodeJs, Skill.Typescript]
            })
            const result = sut.isSatisfiedBy(developer)

            expect(result).toBe(true)
        })
    })

    describe("Developer should has fullstack skills", () => {
        let sut: DeveloperHasBackendSpecification = new DeveloperHasBackendSpecification() 

        it("should return true if developer has fullstack skills", () => {
            const developer = Developer.create({
                name: "Matheus Backend Developer",
                skills: [Skill.ReactJs, Skill.Typescript, Skill.NodeJs]
            })
            const result = sut.isSatisfiedBy(developer)

            expect(result).toBe(true)
        })
    })

    describe("Developer should has mobile or backend skills", () => {
        let sut: DeveloperHasMobileOrBackendSpecification = new DeveloperHasMobileOrBackendSpecification() 

        it("should return true if developer has mobile or backend skills", () => {
            const developer = Developer.create({
                name: "Matheus Backend Developer",
                skills: [Skill.Swift, Skill.SwiftUI]
            })
            const result = sut.isSatisfiedBy(developer)

            expect(result).toBe(true)
        })
    })
})