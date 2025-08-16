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

export function sanToPhrase(san: string): string {
	// Castling first
	if (san === 'O-O') return 'Kingside castling'
	if (san === 'O-O-O') return 'Queenside castling'

	// Regex for SAN moves
	const regex =
		/^(?<piece>[KQRBN])?(?<fromFile>[a-h])?(?<fromRank>[1-8])?(?<capture>x)?(?<to>[a-h][1-8])(?:=(?<promo>[QRBN]))?(?<check>[+#])?$/
	const match = san.match(regex)

	if (!match || !match.groups) return san // fallback

	const {piece, fromFile, fromRank, capture, to, promo, check} = match.groups

	const pieceNames: Record<string, string> = {
		K: 'King',
		Q: 'Queen',
		R: 'Rook',
		B: 'Bishop',
		N: 'Knight',
	}

	let phrase = ''

	// Piece or pawn
	if (piece) {
		phrase += pieceNames[piece]
	} else {
		phrase += 'Pawn'
	}

	// Captures
	if (capture) {
		phrase += ' takes'
	} else {
		phrase += ' to'
	}

	// Destination square
	phrase += ' ' + to

	// Promotion
	if (promo) {
		phrase += ' promoting to ' + pieceNames[promo]
	}

	// Check/checkmate
	if (check === '+') phrase += ' (check)'
	if (check === '#') phrase += ' (checkmate)'

	return phrase
}
