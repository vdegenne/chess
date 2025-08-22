import {html} from 'lit'
import {unsafeHTML} from 'lit/directives/unsafe-html.js'
import {Chess} from '../Chess.js'
import {toUnicode} from '../utils.js'

export class Opening implements Chess.RuntimeOpening {
	id!: number
	name!: string
	line!: string
	trick?: boolean | undefined
	HLTierListBeginner?: Chess.HikaruLevyTierListValue | undefined
	chess: Chess
	altNames?: string[] | undefined
	tierLists!: {
		HLTierListBeginner: Chess.HikaruLevyTierListValue | undefined
		HLTierListUrl: string | undefined
	}

	constructor(opening: Chess.OpeningInterface) {
		Object.assign(this, opening)
		this.chess = new Chess()
		this.chess.loadPgn(opening.line)
	}
	fen() {
		return this.chess.fen()
	}
	getLine(unicode = false) {
		if (unicode) {
			return html`<!---->
				<span class="-font-light text-lg">
					${unsafeHTML(toUnicode(this.line, {spanUnicode: true}))}
				</span>`
		} else {
			return this.line
		}
	}
}
