import { v4 as uuidv4 } from 'uuid'

export abstract class Entity<T> {
    protected readonly props: T 
    public readonly _id: string

    constructor(props: T, id?: string) {
        this.props = props
        this._id = id ? id : uuidv4()
    }
}