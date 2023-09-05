import { describe, it, expect } from 'vitest'
import { lookup } from '../src/Mimeish'
import mime from 'mime.json'

describe('Lookup', () => {
	it('should lookup mime type from extension', () => {
		const ext = 'json'
		const expected = mime[ext]
		const actual = lookup.mime(`file.${ext}`)
		expect(actual).toBe(expected)
	})
	it('should lookup extension from mime type', () => {
		const mimeType = 'application/json'
		const expected = 'json'
		const actual = lookup.extension(mimeType)
		expect(actual).toBe(expected)
	})
})
