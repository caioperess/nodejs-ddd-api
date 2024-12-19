export class Slug {
	constructor(public value: string) {
		this.value = value
	}

	static createFromText(text: string) {
		const slugText = text
			.normalize('NFKD')
			.toLowerCase()
			.trim()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]+/g, '')
			.replace(/_/g, '-')
			.replace(/--+/g, '-')
			.replace(/-$/, '')

		return new Slug(slugText)
	}
}
