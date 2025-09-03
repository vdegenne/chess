export type ToUnicodeOptions = {
	/**
	 * @default 'w'
	 */
	color: 'w' | 'b'

	/**
	 * If true, will return pgn in HTML format
	 *
	 * @default false
	 */
	html: boolean
}
export const TO_UNICODE_DEFAULT_OPTIONS: ToUnicodeOptions = {
	color: 'w',
	html: false,
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
	if (!pgn) {
		return ''
	}

	function getColor(moveIndex: number, baseColor: 'w' | 'b') {
		return moveIndex % 2 === 0 ? baseColor : baseColor === 'w' ? 'b' : 'w'
	}

	const _options: ToUnicodeOptions = {
		...TO_UNICODE_DEFAULT_OPTIONS,
		...(options ?? {}),
	}

	const tokens = pgn.trim().split(/\s+/)
	let moveIndex = 0

	return tokens
		.map((token) => {
			// move number like "1."
			if (/^\d+\.$/.test(token)) {
				return _options.html
					? `<span class="move-number">${token}</span>`
					: token
			}

			// actual move
			const color = getColor(moveIndex, _options.color)
			moveIndex++

			const move = token.replace(/[KQRBNP]/g, (match) => {
				const unicode = color === 'w' ? pieces[match][0] : pieces[match][1]
				return _options.html
					? `<span class="unicode">${unicode}</span>`
					: unicode
			})

			return _options.html ? `<span class="move">${move}</span>` : move
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
