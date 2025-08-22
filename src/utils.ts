export type ToUnicodeOptions = {
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
export const TO_UNICODE_DEFAULT_OPTIONS: ToUnicodeOptions = {
	color: 'w',
	spanUnicode: false,
}

const pieces: Record<string, string[]> = {
	K: ['♔', '♚'],
	Q: ['♕', '♛'],
	R: ['♖', '♜'],
	B: ['♗', '♝'],
	N: ['♘', '♞'],
	P: ['♙', '♟'], // optional, usually pawns are not written in SAN
}

export function toUnicode(pgn: string, options?: Partial<ToUnicodeOptions>) {
	const _options: ToUnicodeOptions = {
		...TO_UNICODE_DEFAULT_OPTIONS,
		...(options ?? {}),
	}

	// split PGN into tokens (moves or numbers)
	const tokens = pgn.trim().split(/\s+/)

	return tokens
		.map((token, i) => {
			// if this token is a move number like "1.", "2.", just return it as-is
			if (/^\d+\.$/.test(token)) return token

			// otherwise it's a move
			const color =
				i % 2 === 0 ? _options.color : _options.color === 'w' ? 'b' : 'w'
			return token.replace(/[KQRBNP]/g, (match) => {
				const unicode = color === 'w' ? pieces[match][0] : pieces[match][1]
				return _options.spanUnicode
					? `<span class="unicode">${unicode}</span>`
					: unicode
			})
		})
		.join(' ')
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

export function removeMoveNumbers(pgn: string) {
	return pgn.replace(/\d+\.\s*/g, '')
}
