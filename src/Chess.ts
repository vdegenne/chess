import {Chess as _Chess} from 'chess.js'
import {
	removeMoveNumbers,
	TO_UNICODE_DEFAULT_OPTIONS,
	toUnicode,
	ToUnicodeOptions,
} from './utils.js'

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

	toUnicodeOptions: Partial<ToUnicodeOptions>
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
			unicode: false,
			newLine: '\n',
			maxWidth: 0,
			toUnicodeOptions: {
				...TO_UNICODE_DEFAULT_OPTIONS,
				...(options?.toUnicodeOptions ?? {}),
			},
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
			pgn = toUnicode(pgn, _options.toUnicodeOptions)
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
		if (_options.moveIndex < 1 || _options.moveIndex > moves.length) {
			throw new Error('moveIndex out of range')
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
	*fenTravel(end?: number) {
		const length = this.history().length
		const max = Math.min(end ?? length, length)
		for (let i = 1; i <= max; i++) {
			yield this.fen({moveIndex: i})
		}
	}
}
