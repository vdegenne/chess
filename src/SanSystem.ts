import {Chess} from 'chess.js'

interface ToStringOptions {
	clean: boolean
	unicode: boolean
}

const UNICODE_MAP: {[key: string]: string} = {
	K: '♔',
	Q: '♕',
	R: '♖',
	B: '♗',
	N: '♘',
}

export class SanSystem {
	_chess: Chess

	constructor(line = '') {
		this._chess = new Chess()
		if (line) {
			const cleanLine = SanSystem.#cleanLine(line)
			this.addMoves(cleanLine)
			// this._chess.loadPgn(line)
		}
	}

	static #cleanLine(value: string): string {
		return SanSystem.#fromUnicode(
			value.replace(/\d+\./g, '').trim().replace(/\s+/g, ' '),
		)
	}
	static #toUnicode(line: string): string {
		return line.replace(/[KQRBN]/g, (m) => UNICODE_MAP[m])
	}
	static #fromUnicode(line: string): string {
		let result = line
		for (const [key, unicodeChar] of Object.entries(UNICODE_MAP)) {
			result = result.replaceAll(unicodeChar, key)
		}
		return result
	}

	/**
	 * You can pass moves like
	 * "e4" or "e4 e5 Nf6"
	 */
	addMoves(moves: string): void {
		const sanMoves = moves.trim().split(/\s+/)
		for (const san of sanMoves) {
			this._chess.move(san)
		}
	}

	toString(options?: Partial<ToStringOptions>) {
		const _options: ToStringOptions = {
			clean: false,
			unicode: false,
			...(options ?? {}),
		}
		let line: string
		if (_options.clean) {
			line = this._chess.history().join(' ')
		} else {
			line = this._chess.pgn().split('\n\n')[1].replace(/\*/g, '')
		}
		if (_options.unicode) {
			line = SanSystem.#toUnicode(line)
		}
		return line
	}

	pgn(unicode = false) {
		return this.toString({unicode})
	}
	cleanPgn(unicode = false) {
		return this.toString({clean: true, unicode})
	}

	history() {
		return this._chess.history()
	}
	turn() {
		return this._chess.turn()
	}

	fen(moveIndex?: number) {
		if (moveIndex === undefined) {
			return this._chess.fen()
		}

		const moves = this.history()
		if (moveIndex < 1 || moveIndex > moves.length) {
			throw new Error('moveIndex out of range')
		}

		const chess = new Chess()
		for (let i = 0; i < moveIndex; i++) {
			chess.move(moves[i])
		}

		return chess.fen()
	}

	/**
	 * Fen iterator, e.g.
	 * ```js
	 *   for (const fen of this.#sanSystem.fenTravel()) {
	 *     this.board.setPosition(fen);
	 *     await sleep(400);
	 *   }
	 * ```
	 */
	*fenTravel(end?: number) {
		const length = this.history().length
		const max = Math.min(end ?? length, length)
		for (let i = 1; i <= max; i++) {
			yield this.fen(i)
		}
	}
}
