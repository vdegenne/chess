# @vdegenne/chess

## Install

```
npm i -D @vdegenne/chess
```

## Usage

```ts
import {Chess} from '@vdegenne/chess'

const chess = new Chess()
chess.loadPgn('e4 e5 Nf3 Nc6')

console.log(chess.pgn({headers: false}))
// 1. e4 e5 2. Nf3 Nc6

console.log(chess.pgn({headers: false, moveNumbers: false, unicode: true}))
// e4 e5 ♘f3 ♞c6

// Travel the fen
for (const fen of chess.fenTravel()) {
	console.log(fen)
}
```

## Commentary

First you need to move the audio files to your local project, e.g.

```bash
mkdir -p ./public/commentary && cp -r ./node_modules/@vdegenne/chess/sounds/default/ ./public/commentary/.
```

Then in your code

```ts
import {Commentary} from '@vdegenne/chess/commentary.js'
const commentary = new Commentary('/commentary/default', {volume: 0.5}) // vite public path.
```

commentary works by feeding the speak method a chess.js Move object, e.g.

```ts
import {Chess} from '@vdegenne/chess' // or 'chess.js'

const chess = new Chess()
chess.loadPgn('e4 e5 Nf3')

commentary.speak(chess.history({verbose: true})[2]) // "Knight f3"
// verbose: true IS IMPORTANT HERE
```
