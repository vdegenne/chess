import {Opening} from './Opening.js'
import _openings from './openings.js'

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

const duplicates = findDuplicatesByMultiple(_openings, ['line', 'id'])

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

export class OpeningsManager {
	#openings: Chess.RuntimeOpening[] = _openings.map((o) => new Opening(o))

	getOpenings(options: {sort?: Chess.OpeningsSortMethod | undefined} = {}) {
		const openings = [...this.#openings]
		if (options.sort) {
			switch (options.sort) {
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
			}
		}
		return openings
	}

	getOpeningFromName(name: string) {
		return this.#openings.find((o) => o.name === name)
	}
	getOpeningFromId(id: number) {
		return this.#openings.find((o) => o.id === id)
	}
}

// const openingsManager = new OpeningsManager()
// export {openingsManager}
