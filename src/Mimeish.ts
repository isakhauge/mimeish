import mime from 'mime.json'
export type Mime = (typeof mime)[keyof typeof mime]
export type Extension = keyof typeof mime

export const lookup = {
	mime(path: string): string | undefined {
		const ext = <Extension>path.split('.').pop()
		if (ext) {
			return mime[ext]
		}
	},
	extension(mimeType: Mime): string | undefined {
		return Object.keys(mime).find(
			(ext: string) => mime[ext as Extension] === mimeType
		)
	},
}
