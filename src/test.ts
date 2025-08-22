import {Chess} from '@vdegenne/chess'

const chess = new Chess()
chess.loadPgn('e4 e5 Nf3 Nc6')

console.log(chess.pgn({headers: false}))
// 1. e4 e5 2. Nf3 Nc6

console.log(chess.pgn({headers: false, moveNumbers: false, unicode: true}))
// e4 e5 ♘f3 ♞c6

// Travel the fen
for (const fen of chess.fenTravel()) {
	console.log(fen)
}
