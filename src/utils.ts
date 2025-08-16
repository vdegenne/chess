type Options = {
	/**
	 * @default 'w'
	 */
	color: 'w' | 'b'

	/**
	 * If true, will add <span class="unicode"> around unicode
	 *
	 * @default false
	 */
	spanUnicode: boolean
}

const pieces: Record<string, string[]> = {
	K: ['♔', '♚'],
	Q: ['♕', '♛'],
	R: ['♖', '♜'],
	B: ['♗', '♝'],
	N: ['♘', '♞'],
	P: ['♙', '♟'], // optional, usually pawns are not written in SAN
}

export function toUnicodeChess(
	san: string,
	options?: Partial<Options>,
): string {
	const _options: Options = {color: 'w', spanUnicode: false, ...(options ?? {})}

	// Replace piece letters with unicode symbols
	return san.replace(/[KQRBNP]/g, (match) => {
		const unicode = _options.color === 'w' ? pieces[match][0] : pieces[match][1]
		return _options.spanUnicode
			? `<span class="unicode">${unicode}</span>`
			: unicode
	})
}
