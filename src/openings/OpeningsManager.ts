import {Chess} from 'chess.js'
import {Opening} from './Opening.js'
import __openings from './openings.js'

// Check for duplicates
function findDuplicatesByMultiple<T>(
	arr: T[],
	keys: (keyof T)[],
): Record<string, T[]> {
	const seenMaps = keys.reduce(
		(acc, key) => {
			acc[key as string] = new Map<any, T>()
			return acc
		},
		{} as Record<string, Map<any, T>>,
	)

	const duplicates: Record<string, T[]> = keys.reduce(
		(acc, key) => {
			acc[key as string] = []
			return acc
		},
		{} as Record<string, T[]>,
	)

	for (const item of arr) {
		for (const key of keys) {
			const map = seenMaps[key as string]
			const value = item[key]
			if (map.has(value)) {
				duplicates[key as string].push(item, map.get(value)!)
			} else {
				map.set(value, item)
			}
		}
	}

	return duplicates
}

const duplicates = findDuplicatesByMultiple(__openings, ['line', 'id'])

if (duplicates.line.length > 0 || duplicates.id.length > 0) {
	const messages = []
	if (duplicates.line.length > 0) {
		messages.push(
			`Duplicate lines: ${duplicates.line.map((d) => d['line']).join(', ')}`,
		)
	}
	if (duplicates.id.length > 0) {
		messages.push(
			`Duplicate ids: ${duplicates.id.map((d) => d['id']).join(', ')}`,
		)
	}
	throw new Error(messages.join(' | '))
}

type GetOpeningsOptions = {
	/**
	 * @default 'None'
	 */
	sort: Chess.OpeningsSortMethod
	/**
	 * @default 'Both'
	 */
	fromPerspective: Chess.OpeningsFromPerspectiveFilter
}

const _openings: Chess.RuntimeOpening[] = __openings.map((o) => new Opening(o))
const openingPgnMap: Map<string, Chess.RuntimeOpening> = new Map()
for (const o of _openings) {
	const key = o.chess.history().join(' ')
	openingPgnMap.set(key, o)
}

export class OpeningsManager {
	getOpenings(options?: Partial<GetOpeningsOptions>) {
		const _options: GetOpeningsOptions = {
			sort: 'None',
			fromPerspective: 'Both',
			...(options ?? {}),
		}
		const openings = [..._openings]
		if (_options.sort) {
			switch (_options.sort) {
				case 'Alphabet':
					openings.sort((o1, o2) => o1.name.localeCompare(o2.name))
					break

				case 'Moves count':
					openings.sort((o1, o2) => {
						const movesA = o1.line.split(' ').length
						const movesB = o2.line.split(' ').length
						if (movesA !== movesB) return movesA - movesB
						return o1.name.localeCompare(o2.name)
					})
					break

				case 'None':
				default:
					break
			}
		}
		switch (_options.fromPerspective) {
			case 'White':
				return openings.filter((o) => o.pov === 'w')
			case 'Black':
				return openings.filter((o) => o.pov === 'b')
			case 'Both':
				return openings
		}
	}

	getOpeningFromName(name: string) {
		return _openings.find((o) => o.name === name)
	}
	getOpeningFromId(id: number) {
		return _openings.find((o) => o.id === id)
	}
	getOpeningFromPgn(pgn: string) {
		const chess = new Chess()
		chess.loadPgn(pgn)
		const moves = chess.history().join(' ')

		const allOpenings = this.getOpenings()
		// find the first opening that has the same move sequence
		return allOpenings.find((o) => o.chess.history().join(' ') === moves)
	}

	getStats() {
		const lengths = this.getOpenings().map((o) => o.chess.history().length)

		// Count occurrences
		const movesCountsMap = lengths.reduce(
			(acc, len) => {
				acc[len] = (acc[len] || 0) + 1
				return acc
			},
			{} as {[movesCount: number]: number},
		)

		return {
			movesCountsMap,
			minMoves: Math.min(...Object.keys(movesCountsMap).map((k) => Number(k))),
			maxMoves: Math.max(...Object.keys(movesCountsMap).map((k) => Number(k))),
		}
	}

	getOpeningTree(opening: Chess.RuntimeOpening) {
		const moves = opening.chess.history()
		const tree: Chess.RuntimeOpening[] = []

		let prefix: string[] = []
		for (const move of moves) {
			prefix.push(move)
			const key = prefix.join(' ')
			const match = openingPgnMap.get(key)
			if (match) tree.push(match)
		}

		return tree
	}
}

// const openingsManager = new OpeningsManager()
// export {openingsManager}
