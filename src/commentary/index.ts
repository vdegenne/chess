import {type Move} from 'chess.js'
import {AUDIO_MAP} from './map.js'
import {createCancelableSpeaker} from './utils.js'

const speaker = createCancelableSpeaker()

interface CommentaryOptions {
	/**
	 * @default `../node_modules/@vdegenne/chess/sounds/default/mp3/`
	 */
	// audioBankDirPath: string
	/**
	 * Speak the color (black, white) or not
	 *
	 * @default false
	 */
	color: boolean

	/**
	 * Speak "pawn" or not
	 *
	 * @default false
	 */
	pawn: boolean

	/**
	 * Speak the captured piece or not
	 *
	 * @default false
	 */
	captured: boolean

	/**
	 * Volume between 0 and 1
	 * @default 0.5
	 */
	volume: number
}

export class Commentary {
	#options: CommentaryOptions

	constructor(
		protected audioBankDirPath: string,
		options?: Partial<CommentaryOptions>,
	) {
		this.#options = {
			// audioBankDirPath: `../node_modules/@vdegenne/chess/sounds/default/`,
			color: false,
			pawn: false,
			captured: false,
			volume: 0.5,
			...(options ?? {}),
		}
	}

	async speak(move: Move, volume = this.#options.volume) {
		const mapArray = this.#sanToMapArray(move)
		console.log(mapArray)
		const fullPaths = this.#mapArrayToFullPaths(mapArray)
		await speaker.speakFiles(fullPaths, volume)
	}

	#sanToMapArray(move: Move): string[] {
		const tokens: string[] = []
		let sanBody = move.san

		if (this.#options.color) tokens.push(AUDIO_MAP.color[move.color])
		if (sanBody === 'O-O' || sanBody === 'O-O-O') {
			tokens.push(AUDIO_MAP.fullMove[sanBody])
			return tokens
		}

		if (move.piece !== 'p' || this.#options.pawn)
			tokens.push(AUDIO_MAP.piece[move.piece])

		if (/[NBRQK]/.test(sanBody[0])) sanBody = sanBody.slice(1)

		const checkMate = sanBody.endsWith('+')
			? '+'
			: sanBody.endsWith('#')
				? '#'
				: ''
		if (checkMate) sanBody = sanBody.slice(0, -1)

		if (sanBody.includes('x')) {
			const parts = sanBody.split('x')
			if (parts[0]) tokens.push(AUDIO_MAP.file[parts[0]])
			tokens.push(AUDIO_MAP.modifier.x)
			sanBody = parts[1]

			// captured piece before the target square
			if (move.captured && this.#options.captured)
				tokens.push(AUDIO_MAP.piece[move.captured])
		}

		if (sanBody.includes('=')) {
			const [dest, promo] = sanBody.split('=')
			tokens.push(AUDIO_MAP.square[dest])
			tokens.push(AUDIO_MAP.modifier['='])
			tokens.push(AUDIO_MAP.piece[promo.toLowerCase()])
		} else {
			const ambiguityMatch = sanBody.match(/^([a-h]|[1-8])?([a-h][1-8])$/)
			if (ambiguityMatch) {
				const prefix = ambiguityMatch[1]
				const square = ambiguityMatch[2]
				if (prefix) {
					if (/[a-h]/.test(prefix)) tokens.push(AUDIO_MAP.file[prefix])
					if (/[1-8]/.test(prefix)) tokens.push(AUDIO_MAP.rank[prefix])
				}
				tokens.push(AUDIO_MAP.square[square])
			} else if (/^[a-h][1-8]$/.test(sanBody)) {
				tokens.push(AUDIO_MAP.square[sanBody])
			}
		}

		if (checkMate) tokens.push(AUDIO_MAP.modifier[checkMate])

		return tokens
	}

	#mapArrayToFullPaths(array: string[]): string[] {
		return array.map((relative) => `${this.audioBankDirPath}/${relative}`)
	}
}
