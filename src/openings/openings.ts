const openings: Chess.OpeningInterface[] = [
	{
		id: 1,
		name: 'English Opening',
		line: 'c4',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=2079',
		},
		pov: 'w',
	},
	{
		id: 2,
		name: "Queen's pawn opening",
		line: 'd4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'w',
	},
	{
		id: 3,
		name: "King's pawn opening",
		line: 'e4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'w',
	},
	{
		id: 4,
		name: 'Réti Opening',
		altNames: ['Zukertort Opening'],
		line: 'Nf3',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=615',
		},
		pov: 'w',
	},

	{
		id: 5,
		name: 'Old Benoni Defense',
		line: 'd4 c5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
	},
	{
		id: 6,
		name: 'Closed Game',
		line: 'd4 d5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
	},
	{
		id: 7,
		name: 'Dutch Defense',
		line: 'd4 f5',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=1905',
		},
		pov: 'b',
	},
	{
		id: 8,
		name: 'Indian defense',
		line: 'd4 Nf6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
	},
	{
		id: 9,
		name: 'Nimzowitsch defense',
		line: 'e4 Nc6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
	},
	{
		id: 10,
		name: 'Caro-Kann Defense',
		line: 'e4 c6',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=1273',
		},
		pov: 'b',
	},
	{
		id: 49,
		name: 'Caro-Kann Defense: Exchange Variation',
		altNames: ['Exchange Caro-Kann'],
		line: 'e4 c6 d4 d5 exd5',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=44',
		},
		pov: 'b',
	},
	{
		id: 103,
		name: 'Caro-Kann Defense: Exchange Variation 3...cxd5',
		altNames: ['Exchange Caro-Kann cxd5'],
		line: 'e4 c6 d4 d5 exd5 cxd5',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=44',
		},
		pov: 'b',
	},
	{
		id: 51,
		name: 'Caro-Kann Defense: Advance Variation',
		altNames: ['Advanced Caro-Kann', 'Advanced Caro-Kann Regular'],
		line: 'e4 c6 d4 d5 e5',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=149',
		},
		pov: 'b',
	},
	{
		id: 64,
		name: 'Caro-Kann Defense: Advance, Tal Variation',
		altNames: ['Advanced Caro-Kann', 'Advanced Caro-Kann h4'],
		line: 'e4 c6 d4 d5 e5 Bf5 h4',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=149',
		},
		pov: 'b',
	},
	{
		id: 63,
		name: 'Caro-Kann Defense: Advance, Van der Wiel Attack',
		altNames: ['Advanced Caro-Kann'],
		line: 'e4 c6 d4 d5 e5 Bf5 Nc3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=149',
		},
		pov: 'b',
	},
	{
		id: 65,
		name: 'Caro-Kann Defense: Advance, Van der Wiel Attack 4...e6 5. g4 Bg6 6. Nge2',
		altNames: ['Advanced Caro-Kann', 'Advanced Caro-Kann Nc3+g4+Nge2'],
		line: 'e4 c6 d4 d5 e5 Bf5 Nc3 e6 g4 Bg6 Nge2',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=149',
		},
		pov: 'b',
	},
	{
		id: 11,
		name: 'Sicilian Defense',
		line: 'e4 c5',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1247',
		},
		pov: 'b',
	},
	{
		id: 92,
		name: 'Sicilian Defense: Open, Dragon Variation',
		description: 'Name based of the Draco constellation',
		altNames: ['Dragon', 'Sicilian Dragon'],
		line: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1296',
		},
		pov: 'b',
	},
	{
		id: 50,
		name: 'Sicilian Defense: Old Sicilian, Open, Accelerated Dragon Variation',
		description:
			'Name based of the Draco constellation. "Accelerated because g6 is played before d6',
		altNames: ['Accelerated Dragon'],
		line: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=60',
		},
		pov: 'b',
	},
	{
		id: 53,
		name: 'Alapin Sicilian Defense',
		line: 'e4 c5 c3',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=465',
		},
		pov: 'w',
	},
	{
		id: 58,
		name: 'Closed Sicilian Defense: Traditional Line',
		line: 'e4 c5 Nc3 Nc6 g3',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=1491',
		},
		pov: 'b',
	},
	{
		id: 60,
		name: 'Sicilian Defense: Open, Dragon Variation 6. Be3 a6',
		description:
			'A mix between the Dragon and Najdorf. Dragon name based of the Draco constellation.',
		altNames: ['Dragdorf'],
		line: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 a6',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=1804',
		},
		pov: 'b',
	},
	{
		id: 12,
		name: 'Pirc Defense',
		altNames: ['Pirc'],
		line: 'e4 d6',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=333',
		},
		pov: 'b',
	},
	{
		id: 86,
		name: 'Pirc Defense: Main Line',
		altNames: ['Pirc'],
		description:
			"Difers from King's Indian Defense as it tries to counter-play e4 instead of d4.",
		line: 'e4 d6 d4 Nf6 Nc3 g6',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=333',
		},
		pov: 'b',
	},
	{
		id: 13,
		name: 'Scandinavian Defense',
		altNames: ['Scandi'],
		line: 'e4 d5',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=933',
		},
		pov: 'b',
	},
	{
		id: 90,
		name: 'Scandinavian Defense: Mieses-Kotrč Variation',
		line: 'e4 d5 exd5 Qxd5',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=933',
		},
		pov: 'b',
	},
	{
		id: 14,
		name: 'Open game',
		line: 'e4 e5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'w',
	},
	{
		id: 15,
		name: 'French Defense',
		line: 'e4 e6',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=459',
		},
		pov: 'b',
	},
	{
		id: 52,
		name: 'French Defense: Advance Variation',
		altNames: ['Advanced French'],
		line: 'e4 e6 d4 d5 e5',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=345',
		},
		pov: 'b',
	},
	{
		id: 66,
		name: 'French Defense: Exchange Variation',
		altNames: ['Exchange French'],
		line: 'e4 e6 d4 d5 exd5 exd5',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=127',
		},
		pov: 'b',
	},
	{
		id: 16,
		name: "Alekhine's Defense",
		line: 'e4 Nf6',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=550',
		},
		pov: 'b',
	},
	{
		id: 102,
		name: 'Modern Defense 1. d4',
		description:
			"Modern can delay King's Indian Defense setup and play Fianchetto instead depending on what opponent plays.",
		altNames: ['Modern Defense d4'],
		line: 'd4 g6',
		altLines: ['d4 g6 e4 d6', 'd4 d6 e4 g6', 'd4 g6 c4 Bg7 Nf3 d6'],
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=2061',
		},
		pov: 'b',
	},
	{
		id: 17,
		name: 'Modern Defense 1. e4',
		description:
			"Modern can delay King's Indian Defense setup and play Fianchetto instead depending on what opponent plays.",
		altNames: ['Modern Defense e4'],
		line: 'e4 g6',
		altLines: ['e4 g6 d4 d6', 'e4 d6 d4 g6'],
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=2061',
		},
		pov: 'b',
	},
	{
		id: 18,
		name: 'Chigorin variation',
		line: 'd4 d5 Nc3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'w',
	},
	{
		id: 19,
		name: "Queen's Gambit",
		line: 'd4 d5 c4',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=536',
		},
		pov: 'w',
	},
	{
		id: 88,
		name: "Queen's Gambit Declined",
		line: 'd4 d5 c4 e6',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=536',
		},
		pov: 'b',
	},
	{
		id: 20,
		name: 'Zukertort variation',
		line: 'd4 d5 Nf3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'w',
	},
	{
		id: 21,
		name: 'Trompowsky Attack',
		line: 'd4 Nf6 Bg5',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1834',
		},
		pov: 'w',
	},
	{
		id: 99,
		name: 'Trompowsky Attack 2...d5',
		line: 'd4 Nf6 Bg5 d5',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1834',
		},
		pov: 'b',
	},
	{
		id: 22,
		name: 'Vienna Game',
		line: 'e4 e5 Nc3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1911',
		},
		pov: 'w',
	},
	{
		id: 100,
		name: 'Vienna Game: Falkbeer, Vienna Gambit',
		line: 'e4 e5 Nc3 Nf6 f4',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1911',
		},
		pov: 'w',
	},
	{
		id: 23,
		name: "Bishop's opening",
		line: 'e4 e5 Bc4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'w',
	},
	{
		id: 24,
		name: 'Center game',
		line: 'e4 e5 d4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'w',
	},
	{
		id: 25,
		name: "King's Gambit",
		line: 'e4 e5 f4',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1493',
		},
		pov: 'w',
	},

	{
		id: 26,
		name: 'Benoni Defense',
		line: 'd4 Nf6 c4 c5',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=695',
		},
		pov: 'b',
	},
	{
		id: 27,
		name: 'Old Indian Defense',
		line: 'd4 Nf6 c4 d6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
	},
	{
		id: 28,
		name: 'Budapest Gambit',
		line: 'd4 Nf6 c4 e5',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=1207',
		},
		pov: 'b',
	},
	{
		id: 29,
		name: 'Philidor defense',
		line: 'e4 e5 Nf3 d6',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=223',
		},
		pov: 'w',
	},
	{
		id: 85,
		name: 'Philidor Defense: Hanham, Lion Variation',
		line: 'e4 e5 Nf3 d6 d4 Nd7 Nc3 Ngf6',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=223',
		},
		pov: 'b',
	},
	{
		id: 30,
		name: "King's Pawn Opening: Latvian Gambit",
		altNames: ['Gambit Letton'],
		line: 'e4 e5 Nf3 f5',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1755',
		},
		pov: 'b',
	},
	{
		id: 31,
		name: "Petrov's Defense",
		line: 'e4 e5 Nf3 Nf6',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=156',
		},
		pov: 'b',
	},
	{
		id: 32,
		name: 'Damiano Defense',
		line: 'e4 e5 Nf3 f6',
		trick: true,
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
	},

	{
		id: 33,
		name: "Queen's Pawn Opening: Blackmar, Blackmar-Diemer Gambit",
		altNames: ['BDG'],
		line: 'd4 d5 e4 dxe4 Nc3',
		altLines: ['d4 d5 Nc3 Nf6 e4'],
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
	},
	{
		id: 34,
		name: 'Catalan Opening',
		line: 'd4 Nf6 c4 e6 g3',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=1393',
		},
		pov: 'w',
	},
	{
		id: 56,
		name: "Queen's Gambit Declined: Catalan Opening",
		line: 'd4 Nf6 c4 e6 Nf3 d5 g3',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=1393',
		},
		pov: 'w',
	},
	{
		id: 35,
		name: 'Ruy López Opening',
		line: 'e4 e5 Nf3 Nc6 Bb5',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=797',
		},
		pov: 'w',
	},
	{
		id: 54,
		name: 'Ruy López Opening: Berlin Defense',
		line: 'e4 e5 Nf3 Nc6 Bb5 Nf6',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=801',
		},
		pov: 'b',
	},
	{
		id: 36,
		name: 'Ponziani Opening',
		line: 'e4 e5 Nf3 Nc6 c3',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=392',
		},
		pov: 'w',
	},
	{
		id: 37,
		name: 'Three knights opening',
		line: 'e4 e5 Nf3 Nc6 Nc3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'w',
	},
	{
		id: 38,
		name: 'Italian Game',
		line: 'e4 e5 Nf3 Nc6 Bc4',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1321',
		},
		pov: 'w',
	},
	{
		id: 39,
		name: 'Scotch Game',
		line: 'e4 e5 Nf3 Nc6 d4',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1046',
		},
		pov: 'w',
	},

	{
		id: 40,
		name: 'Benko Gambit',
		line: 'd4 Nf6 c4 c5 d5 b5',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=626',
		},
		pov: 'b',
	},
	{
		id: 41,
		name: 'Nimzo-Indian Defense',
		altNames: ['Nimzo Indian'],
		line: 'd4 Nf6 c4 e6 Nc3 Bb4',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=2324',
		},
		pov: 'b',
	},
	{
		id: 42,
		name: "Queen's Indian Defense",
		altNames: ['QID'],
		line: 'd4 Nf6 c4 e6 Nf3 b6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
		tags: ['Hypermodern'],
	},
	{
		id: 43,
		name: 'Grünfeld Defense',
		altNames: ['Gruenfeld'],
		line: 'd4 Nf6 c4 g6 Nc3 d5',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=972',
		},
		pov: 'b',
	},
	{
		id: 44,
		name: "King's Indian Defense",
		description: 'Not to confuse with Modern Defense',
		altNames: ["King's Indian", 'KID'],
		line: 'd4 Nf6 c4 g6',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1574',
		},
		pov: 'b',
	},
	{
		id: 78,
		name: "King's Indian Defense: Normal Variation",
		description: 'Not to confuse with Modern Defense',
		altNames: ["King's Indian", 'KID'],
		line: 'd4 Nf6 c4 g6 Nc3 Bg7',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1574',
		},
		pov: 'b',
	},
	{
		id: 45,
		name: 'Four knights game',
		line: 'e4 e5 Nf3 Nc6 Nc3 Nf6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'w',
	},
	{
		id: 68,
		name: 'Four Knights Game: Italian Variation',
		altNames: ['Four Knights Italian'],
		line: 'e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=295',
		},
		pov: 'w',
	},
	{
		id: 46,
		name: 'Giuoco Piano Game',
		altNames: ['Giuoco', 'Gucci Piano'],
		line: 'e4 e5 Nf3 Nc6 Bc4 Bc5',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=522',
		},
		pov: 'w',
	},
	{
		id: 70,
		name: 'Giuoco Piano Game: Main Line',
		altNames: ['Giuoco', 'Gucci Piano'],
		line: 'e4 e5 Nf3 Nc6 Bc4 Bc5 c3',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=522',
		},
		pov: 'w',
	},
	{
		id: 62,
		name: 'Giuoco Piano Game: Evans Gambit',
		line: 'e4 e5 Nf3 Nc6 Bc4 Bc5 b4',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=2368',
		},
		pov: 'w',
	},
	{
		id: 47,
		name: 'Hungarian Defense',
		parent: 38,
		line: 'e4 e5 Nf3 Nc6 Bc4 Be7',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
	},
	{
		id: 48,
		name: 'Italian Game: Two Knights Defense',
		line: 'e4 e5 Nf3 Nc6 Bc4 Nf6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
	},
	{
		id: 55,
		name: "Bird's Opening",
		line: 'f4',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=980',
		},
		pov: 'w',
	},
	{
		id: 57,
		name: "King's Pawn Opening: The Bongcloud",
		line: 'e4 e5 Ke2',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=1143',
		},
		pov: 'w',
	},
	{
		id: 59,
		name: 'Danish Gambit',
		line: 'e4 e5 d4 exd4 c3',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=1588',
		},
		pov: 'w',
	},
	{
		id: 61,
		name: 'Englund Gambit',
		line: 'd4 e5',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/M9CwH47r6og?t=2223',
		},
		pov: 'b',
	},
	{
		id: 67,
		name: "Fool's Mate",
		line: 'f3 e6 g4 Qh4#',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=222',
		},
		pov: 'b',
	},
	{
		id: 69,
		name: 'Fred Opening',
		line: 'f3 f6 Kf2',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=411',
		},
		pov: 'w',
	},
	{
		id: 71,
		name: 'Italian Game: Fried Liver, Fegatello Attack, Polerio Defense',
		altNames: ['Fried Liver'],
		line: 'e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 Nxf7 Kxf7 Qf3+ Ke6 Nc3 Ne7',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=627',
		},
		pov: 'w',
	},
	{
		id: 72,
		name: 'Closed Sicilian Defense: Grand Prix Attack',
		altNames: ['Grand Prix'],
		line: 'e4 c5 Nc3 Nc6 f4',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=738',
		},
		pov: 'w',
	},
	{
		id: 73,
		name: 'Grob Opening',
		line: 'g4',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=832',
		},
		pov: 'w',
	},
	{
		id: 74,
		name: 'Caro-Kann Defense: Hillbilly Attack',
		line: 'e4 c6 Bc4 d5 Bb3',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1055',
		},
		pov: 'b',
	},
	{
		id: 75,
		name: 'Hippopotamus Defense',
		altNames: ['Hippo'],
		line: 'e3 Nf6 d3 b6 b3 Nc6 g3 e5 Bg2 d5 Bb2 Bd6 Ne2 Be6 Nd2 O-O h3 a6 a3',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1185',
		},
		pov: 'b',
	},
	{
		id: 76,
		name: 'Sicilian Defense: Hyperaccelerated Dragon Variation',
		description:
			'Name based of the Draco constellation. "Accelerated because g6 is played before d6',
		altNames: ['Hyper-Accelerated Dragon'],
		line: 'e4 c5 Nf3 g6',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1255',
		},
		pov: 'b',
	},
	{
		id: 77,
		name: 'Giuoco Piano Game: Jerome Gambit',
		line: 'e4 e5 Nf3 Nc6 Bc4 Bc5 Bxf7+',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1372',
		},
		pov: 'w',
	},
	{
		id: 79,
		name: "King's Indian Attack",
		line: 'Nf3 d5 g3',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1664',
		},
		pov: 'b',
	},
	{
		id: 80,
		name: 'London System',
		line: 'd4 d5 Nf3 Nf6 Bf4',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1818',
		},
		pov: 'w',
	},
	{
		id: 81,
		name: 'Ruy López Opening: Marshall Attack',
		line: 'e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=1947',
		},
		pov: 'w',
	},
	{
		id: 82,
		name: 'Sicilian Defense: Open, Najdorf Variation',
		altNames: ['Najdorf Defense'],
		line: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/fHsb7-LbC34?t=2175',
		},
		pov: 'b',
	},
	{
		id: 83,
		name: 'Nimzowitsch-Larsen Attack',
		line: 'b3',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=38',
		},
		pov: 'w',
	},
	{
		id: 84,
		name: 'Polish Opening',
		altNames: ['Orangutan', 'Sokolsky'],
		line: 'b4',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=96',
		},
		pov: 'w',
	},
	{
		id: 87,
		name: 'Scandinavian Defense: Modern, Portuguese Variation',
		line: 'e4 d5 exd5 Nf6 d4 Bg4',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=461',
		},
		pov: 'b',
	},
	{
		id: 89,
		name: 'Sicilian Defense: Nyezhmetdinov-Rossolimo Attack',
		altNames: ['Rossolimo'],
		line: 'e4 c5 Nf3 Nc6 Bb5',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=729',
		},
		pov: 'w',
	},
	{
		id: 91,
		name: 'Semi-Slav Defense',
		line: 'd4 d5 c4 e6 Nc3 Nf6 Nf3 c6',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1129',
		},
		pov: 'b',
	},
	{
		id: 94,
		name: 'Slav Defense',
		altNames: ['Regular Slav'],
		line: 'd4 d5 c4 c6',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1470',
		},
		pov: 'b',
	},
	{
		id: 93,
		name: 'Sicilian Defense: Taimanov Variation',
		altNames: ['Taimanov', 'Sicilian Taimanov'],
		line: 'e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1405',
		},
		pov: 'b',
	},
	{
		id: 95,
		name: 'Sicilian Defense: Smith-Morra Gambit',
		line: 'e4 c5 d4',
		altLines: ['e4 c5 d4 cxd4 c3'],
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1530',
		},
		pov: 'w',
	},
	{
		id: 96,
		name: 'Sodium Attack',
		altNames: ['Durkin Opening'],
		line: 'Na3',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1635',
		},
		pov: 'w',
	},
	{
		id: 97,
		name: 'Stonewall Attack',
		altNames: ['Stonewall'],
		line: 'd4 d5 e3 Nf6 f4',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1712',
		},
		pov: 'w',
	},
	{
		id: 98,
		name: 'French Defense: Tarrasch Variation',
		line: 'e4 e6 d4 d5 Nd2',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListBeginnerUrl: 'https://youtu.be/z3FBRlzSMHc?t=1783',
		},
		pov: 'b',
	},
	{
		id: 101,
		name: 'English Opening: Great Snake Variation',
		line: 'c4 g6',
		youtubes: ['https://youtu.be/T1RJyn7qBUM?t=674'],
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
	},
	{
		id: 104,
		name: 'Closed Sicilian Defense',
		line: 'e4 c5 Nc3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'w',
	},
	{
		id: 105,
		name: 'Réti Opening: Tennison Gambit',
		line: 'Nf3 d5 e4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		youtubes: ['https://www.youtube.com/shorts/8fU5fzgKHHM'],
		pov: 'w',
	},
	{
		id: 106,
		name: 'Réti Opening: Tennison Gambit #',
		line: 'e4 d5 Nf3 dxe4 Ne5 f6 Qh5+ g6 Bc4 gxh5 Bf7#',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		youtubes: ['https://www.youtube.com/shorts/8fU5fzgKHHM'],
		pov: 'w',
	},
	{
		id: 107,
		name: 'Englund Gambit #',
		line: 'd4 e5 dxe5 Nc6 Nf3 Qe7 Bf4 Qb4+ Bd2 Qxb2 Bc3 Bb4 Qd2 Bxc3 Qxc3 Qc1#',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		youtubes: ['https://youtu.be/M9CwH47r6og?t=2233'],
		pov: 'w',
	},
	{
		id: 108,
		name: 'French Defense: Knight Variation, Franco-Hiva Gambit',
		line: 'e4 e6 Nf3 f5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		pov: 'b',
	},
	{
		id: 109,
		name: "King's Pawn Opening: Latvian Gambit #",
		line: 'e4 e5 Nf3 f5 Nxe5 Bc5 exf5 Bxf2+ Kxf2 Qh4+ Kg1 Qd4#',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListBeginnerUrl: undefined,
		},
		youtubes: ['https://www.youtube.com/shorts/O7xcKga2hZk'],
		pov: 'b',
	},
] as const

export default openings
