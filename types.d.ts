import type {TemplateResult} from 'lit'
import type {Chess} from './src/Chess.ts'

declare global {
	export namespace Chess {
		type HikaruLevyTierListValue =
			| 'Legendary'
			| 'Unbreakable'
			| 'Legit'
			| 'Really, bro'
			| 'Tricks only'
			| 'Garbage'

		type TierList = 'HLTierListBeginner' | 'MyTierList'

		interface OpeningInterface {
			id: number
			name: string
			altNames?: string[] | undefined
			line: string
			trick?: boolean
			tierLists: {
				HLTierListBeginner: HikaruLevyTierListValue | undefined
				HLTierListUrl: string | undefined
			}
		}

		interface RuntimeOpening extends OpeningInterface {
			chess: Chess
			fen: () => string
			getLine: () => string | TemplateResult
		}

		type OpeningsSortMethod = 'Moves count' | 'Alphabet'
	}
}

export {}
