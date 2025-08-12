# @vdegenne/chess

## Install

```
npm i -D @vdegenne/chess
```

## Usage

```ts
import {SanSystem} from '@vdegenne/chess/SanSystem.js'

// Can load unicode representation (♔♕♖♗♘) / can use numericals as well ->  1. e4 e5 2. Nf3 etc...
const sans = new SanSystem('e4 e5 ♘f3 ♘c6 ♗c4 ♗e7')

console.log(sans.pgn()) // "1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7"
// Calls toString in literals
console.log(`${sans}`) // "1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7"
console.log('' + sans) // --------------------------------

// Clean
console.log(sans.cleanPgn()) // "e4 e5 Nf3 Nc6 Bc4 Be7"
// same as:
console.log(sans.toString({clean: true})) // "e4 e5 Nf3 Nc6 Bc4 Be7"

// Back to unicode representation
console.log(sans.pgn(true)) // 1. e4 e5 2. ♘f3 ♘c6 3. ♗c4 ♗e7
// or
console.log(sans.toString({unicode: true})) // "e4 e5 ♘f3 ♘c6 ♗c4 ♗e7"

// Fen at move #
console.log(sans.fen(2)) // Fen at move #2

// Tough not recommended, the _chess internal object is public
console.log(sans._chess.pgn()) // Prints pgn with headers

// Travel the fen
for (const fen of sans.fenTravel()) {
	console.log(fen)
}
```
