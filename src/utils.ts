export function toUnicodeChess(san: string, isWhite = true): string {
	const pieces: Record<string, string[]> = {
		K: ['♔', '♚'],
		Q: ['♕', '♛'],
		R: ['♖', '♜'],
		B: ['♗', '♝'],
		N: ['♘', '♞'],
		P: ['♙', '♟'], // optional, usually pawns are not written in SAN
	}

	// Replace piece letters with unicode symbols
	return san.replace(/[KQRBNP]/g, (match) => {
		return isWhite ? pieces[match][0] : pieces[match][1]
	})
}
