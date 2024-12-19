import { Slug } from './slug.js'

test('it should be able to create a new slug from text', () => {
	const slug = Slug.createFromText('Exámple Slug')

	expect(slug.value).toBe('example-slug')
})
