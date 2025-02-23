import { Entity } from '@/core/entities/entity.js'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id.js'
import type { Optional } from '@/core/types/optional.js'
import dayjs from 'dayjs'
import { Slug } from './value-objects/slug.js'

interface IQuestionProps {
	authorId: UniqueEntityID
	bestAnswerId?: UniqueEntityID
	title: string
	slug: Slug
	content: string
	createdAt: Date
	updatedAt?: Date
}

export class Question extends Entity<IQuestionProps> {
	static create(
		props: Optional<IQuestionProps, 'createdAt' | 'slug'>,
		id?: UniqueEntityID,
	) {
		const question = new Question(
			{
				...props,
				slug: props.slug ?? Slug.createFromText(props.title),
				createdAt: new Date(),
			},
			id,
		)

		return question
	}

	private touch() {
		this.props.updatedAt = new Date()
	}

	set title(title: string) {
		this.props.title = title
		this.props.slug = Slug.createFromText(title)
		this.touch()
	}

	set content(content: string) {
		this.props.content = content
		this.touch()
	}

	set bestAnswerId(bestAnswerId: UniqueEntityID | undefined) {
		this.props.bestAnswerId = bestAnswerId
		this.touch()
	}

	get authorId() {
		return this.props.authorId
	}

	get bestAnswerId() {
		return this.props.bestAnswerId
	}

	get title() {
		return this.props.title
	}

	get slug() {
		return this.props.slug
	}

	get content() {
		return this.props.content
	}

	get createdAt() {
		return this.props.createdAt
	}

	get updatedAt() {
		return this.props.updatedAt
	}

	get isNew(): boolean {
		return dayjs().diff(this.createdAt, 'days') <= 3
	}
}
