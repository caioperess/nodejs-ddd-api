import { UniqueEntityID } from '@/core/entities/unique-entity-id.js'
import { Answer } from '../entities/answer.js'
import type { IAnswersRepository } from '../repositories/answers-repository.js'

interface IAnswerQuestionUseCaseRequest {
	instructorId: string
	questionId: string
	content: string
}

export class AnswerQuestionUseCase {
	constructor(private answersRepository: IAnswersRepository) {}

	async execute({
		instructorId,
		questionId,
		content,
	}: IAnswerQuestionUseCaseRequest) {
		const answer = Answer.create({
			authorId: new UniqueEntityID(instructorId),
			questionId: new UniqueEntityID(questionId),
			content,
		})

		await this.answersRepository.create(answer)

		return answer
	}
}
