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
			parent?: number
			pov: 'w' | 'b'
			description?: string | undefined
			altNames?: string[] | undefined
			line: string
			youtubes?: string[] | undefined
			altLines?: string[] | undefined
			trick?: boolean
			tierLists: {
				HLTierListBeginner: HikaruLevyTierListValue | undefined
				HLTierListBeginnerUrl: string | undefined
			}
			tags?: string[] | undefined
		}

		interface RuntimeOpening extends OpeningInterface {
			chess: Chess
			// fen: () => string
			// getLine: () => string | TemplateResult
		}

		type OpeningsSortMethod = 'Moves count' | 'Alphabet'
		type OpeningsFromPerspectiveFilter = 'White' | 'Black' | 'Both'
	}
}

export {}
