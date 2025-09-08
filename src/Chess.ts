import {Chess as _Chess} from 'chess.js'
import {removeMoveNumbers, toHtml, toUnicode} from './utils.js'

interface PgnOptions {
	/**
	 * @default true
	 */
	headers: boolean
	/**
	 * @default true
	 */
	moveNumbers: boolean
	/**
	 * @default '\n'
	 */
	newLine: string
	/**
	 * @default 0
	 */
	maxWidth: number
	/**
	 * @default false
	 */
	unicode: boolean
	/**
	 * @default false
	 */
	html: boolean
	/**
	 * @default w
	 */
	startColor: 'w' | 'b'
}

interface FenOptions {
	/**
	 * @default false
	 */
	forceEnpassantSquare: boolean
	/**
	 * @default undefined
	 */
	moveIndex: number | undefined
}

export class Chess extends _Chess {
	pgn(options?: Partial<PgnOptions>): string {
		const _options: PgnOptions = {
			headers: true,
			moveNumbers: true,
			newLine: '\n',
			maxWidth: 0,
			startColor: 'w',
			unicode: false,
			html: false,
			...(options ?? {}),
		}

		let pgn = super.pgn(_options)
		pgn = pgn.replace(/\*$/, '')

		if (_options.headers === false) {
			// TODO: would this still work if newLine option is changed?
			pgn = pgn.split('\n\n')[1]
		}
		if (_options.moveNumbers === false) {
			pgn = removeMoveNumbers(pgn)
		}

		if (_options.unicode) {
			pgn = toUnicode(pgn, _options.startColor)
		}
		if (_options.html) {
			pgn = toHtml(pgn, _options.startColor)
		}

		return pgn
	}

	fen(options?: Partial<FenOptions>): string {
		const _options: FenOptions = {
			forceEnpassantSquare: false,
			moveIndex: undefined,
			...(options ?? {}),
		}

		if (_options.moveIndex === undefined) {
			return super.fen(_options)
		}

		const moves = this.history({verbose: true})
		if (_options.moveIndex < 0 || _options.moveIndex > moves.length) {
			throw new Error('moveIndex out of range')
		}

		if (_options.moveIndex === 0) {
			return moves[0].before
		}
		return moves[_options.moveIndex - 1].after
	}

	/**
	 * Fen iterator, e.g.
	 * ```js
	 *   for (const fen of chess.fenTravel()) {
	 *     board.setPosition(fen);
	 *     await sleep(400);
	 *   }
	 * ```
	 */
	*fenTravel(start = 1, end?: number) {
		const length = this.history().length
		const max = Math.min(end ?? length, length)
		for (let i = start; i <= max; i++) {
			yield this.fen({moveIndex: i})
		}
	}

	static fromPgn(pgn: string) {
		const c = new Chess()
		c.loadPgn(pgn)
		return c
	}
}
