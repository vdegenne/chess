const pieces: Record<string, string[]> = {
	K: ['♔', '♚'],
	Q: ['♕', '♛'],
	R: ['♖', '♜'],
	B: ['♗', '♝'],
	N: ['♘', '♞'],
	P: ['♙', '♟'], // optional, usually pawns are not written in SAN
}

function getColor(moveIndex: number, baseColor: 'w' | 'b') {
	return moveIndex % 2 === 0 ? baseColor : baseColor === 'w' ? 'b' : 'w'
}

export function toUnicode(pgn: string, startColor: 'w' | 'b' = 'w'): string {
	if (!pgn) return ''

	const tokens = pgn.trim().split(/\s+/)
	let moveIndex = 0

	return tokens
		.map((token) => {
			if (/^\d+\.$/.test(token)) {
				return token
			}

			const pieceColor = getColor(moveIndex, startColor)
			moveIndex++

			return token.replace(/[KQRBNP]/g, (match) =>
				pieceColor === 'w' ? pieces[match][0] : pieces[match][1],
			)
		})
		.join(' ')
}

export function toHtml(pgn: string, startColor: 'w' | 'b' = 'w'): string {
	if (!pgn) return ''

	const tokens = pgn.trim().split(/\s+/)
	let moveIndex = 0

	return tokens
		.map((token) => {
			// Move numbers
			if (/^\d+\.$/.test(token)) {
				return `<span class="move-number">${token}</span>`
			}

			const pieceColor = getColor(moveIndex, startColor)
			moveIndex++

			// Replace letters or existing Unicode with wrapped Unicode
			const move = token
				// piece letters → unicode
				.replace(/[KQRBNP]/g, (match) => {
					return `<span class="letter ${pieceColor === 'w' ? 'white' : 'black'}">${match}</span>`
				})
				// already-unicode pieces → wrap them
				.replace(/[♔♕♖♗♘♙♚♛♜♝♞♟]/g, (match) => {
					return `<span class="unicode ${pieceColor === 'w' ? 'white' : 'black'}">${match}</span>`
				})

			return `<span class="move">${move}</span>`
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
