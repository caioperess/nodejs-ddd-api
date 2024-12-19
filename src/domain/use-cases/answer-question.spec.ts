import type { IAnswersRepository } from '../repositories/answers-repository.js'
import { AnswerQuestionUseCase } from './answer-question.js'

const fakeAnswersRepository: IAnswersRepository = {
	async create(_) {
		return Promise.resolve()
	},
}

test('create an answer', async () => {
	const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

	const answer = await answerQuestion.execute({
		instructorId: '1',
		questionId: '1',
		content: 'Nova resposta',
	})

	expect(answer.content).toEqual('Nova resposta')
})
