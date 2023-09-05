export const lookup: {
	mime: (path: string) => string | undefined
	extension: (mime: string) => string | undefined
}

declare module mimeish {
	export const lookup: {
		mime: (path: string) => string | undefined
		extension: (mime: string) => string | undefined
	}
}
