import { Entity } from '@/core/entities/entity.js'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id.js'
import type { Optional } from '@/core/types/optional.js'

interface IAnswerProps {
	authorId: UniqueEntityID
	questionId: UniqueEntityID
	content: string
	createdAt: Date
	updatedAt?: Date
}

export class Answer extends Entity<IAnswerProps> {
	static create(
		props: Optional<IAnswerProps, 'createdAt'>,
		id?: UniqueEntityID,
	) {
		const question = new Answer({ ...props, createdAt: new Date() }, id)

		return question
	}

	private touch() {
		this.props.updatedAt = new Date()
	}

	set content(content: string) {
		this.props.content = content
		this.touch()
	}

	get content() {
		return this.props.content
	}

	get excerpt() {
		return this.content.substring(0, 120).trim().concat('...')
	}

	get questionId() {
		return this.props.questionId
	}

	get authorId() {
		return this.props.authorId
	}

	get createdAt() {
		return this.props.createdAt
	}

	get updatedAt() {
		return this.props.updatedAt
	}
}
