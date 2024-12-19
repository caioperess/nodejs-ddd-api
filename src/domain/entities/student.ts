import { Entity } from '@/core/entities/entity.js'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id.js'

interface IStudentProps {
	name: string
}

export class Student extends Entity<IStudentProps> {
	static create(props: IStudentProps, id?: UniqueEntityID) {
		const question = new Student(props, id)

		return question
	}
}
