import { UniqueEntityID } from './unique-entity-id.js'

export class Entity<T> {
	private readonly _id: UniqueEntityID
	protected props: T

	public get id() {
		return this._id
	}

	protected constructor(props: T, id?: UniqueEntityID) {
		this.props = props
		this._id = id ?? new UniqueEntityID()
	}
}
