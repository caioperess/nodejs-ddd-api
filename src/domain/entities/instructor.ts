import { Entity } from '@/core/entities/entity.js'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id.js'

interface IInstructorProps {
	name: string
}

export class Instructor extends Entity<IInstructorProps> {
	static create(props: IInstructorProps, id?: UniqueEntityID) {
		const question = new Instructor(props, id)

		return question
	}
}
