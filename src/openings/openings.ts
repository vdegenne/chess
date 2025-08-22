const openings: Chess.OpeningInterface[] = [
	{
		id: 1,
		name: 'English Opening',
		line: 'c4',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=2079',
		},
	},
	{
		id: 2,
		name: "Queen's pawn opening",
		line: 'd4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 3,
		name: "King's pawn opening",
		line: 'e4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 4,
		name: 'Zukertort/réti opening',
		line: 'Nf3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},

	{
		id: 5,
		name: 'Old benoni defense',
		line: 'd4 c5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 6,
		name: 'Closed game',
		line: 'd4 d5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 7,
		name: 'Dutch Defense',
		line: 'd4 f5',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=1905',
		},
	},
	{
		id: 8,
		name: 'Indian defense',
		line: 'd4 Nf6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 9,
		name: 'Nimzowitsch defense',
		line: 'e4 Nc6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 10,
		name: 'Caro-Kann Defense',
		line: 'e4 c6',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=1273',
		},
	},
	{
		id: 49,
		name: 'Caro-Kann Defense: Exchange Variation',
		line: 'e4 c6 d4 d5 exd5',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListUrl: 'https://youtu.be/fHsb7-LbC34?t=42',
		},
	},
	{
		id: 51,
		name: 'Caro-Kann Defense: Advance Variation',
		line: 'e4 c6 d4 d5 e5',
		tierLists: {
			HLTierListBeginner: 'Unbreakable',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=149',
		},
	},
	{
		id: 11,
		name: 'Sicilian Defense',
		line: 'e4 c5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 50,
		name: 'Sicilian Defense: Open, Accelerated Dragon, Modern Variation',
		line: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=60',
		},
	},
	{
		id: 53,
		name: 'Alapin Sicilian Defense',
		line: 'e4 c5 c3',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=465',
		},
	},
	{
		id: 58,
		name: 'Closed Sicilian Defense: Traditional Line',
		line: 'e4 c5 Nc3 Nc6 g3',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=1491',
		},
	},
	{
		id: 60,
		name: 'Sicilian Defense: Open, Dragon Variation',
		altNames: ['Dragdorf'],
		line: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=1804',
		},
	},
	{
		id: 12,
		name: 'Pirc defense',
		line: 'e4 d6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 13,
		name: 'Scandinavian defense',
		line: 'e4 d5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 14,
		name: 'Open game',
		line: 'e4 e5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 15,
		name: 'French Defense',
		line: 'e4 e6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 52,
		name: 'French Defense: Advance Variation',
		line: 'e4 e6 d4 d5 e5',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=345',
		},
	},
	{
		id: 16,
		name: 'Alekhine Defense',
		line: 'e4 Nf6',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=550',
		},
	},
	{
		id: 17,
		name: 'Modern defense',
		line: 'e4 g6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},

	{
		id: 18,
		name: 'Chigorin variation',
		line: 'd4 d5 Nc3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 19,
		name: "Queen's gambit",
		line: 'd4 d5 c4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 20,
		name: 'Zukertort variation',
		line: 'd4 d5 Nf3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 21,
		name: 'Trompowsky attack',
		line: 'd4 Nf6 Bg5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 22,
		name: 'Vienna game',
		line: 'e4 e5 Nc3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 23,
		name: "Bishop's opening",
		line: 'e4 e5 Bc4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 24,
		name: 'Center game',
		line: 'e4 e5 d4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 25,
		name: "King's gambit",
		line: 'e4 e5 f4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},

	{
		id: 26,
		name: 'Benoni Defense',
		line: 'd4 Nf6 c4 c5',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=695',
		},
	},
	{
		id: 27,
		name: 'Old indian defense',
		line: 'd4 Nf6 c4 d6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 28,
		name: 'Budapest Gambit',
		line: 'd4 Nf6 c4 e5',
		tierLists: {
			HLTierListBeginner: 'Tricks only',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=1207',
		},
	},
	{
		id: 29,
		name: 'Philidor defense',
		line: 'e4 e5 Nf3 d6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 30,
		name: 'Latvian gambit',
		line: 'e4 e5 Nf3 f5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 31,
		name: "Petrov's defense",
		line: 'e4 e5 Nf3 Nf6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 32,
		name: 'Damiano Defense',
		line: 'e4 e5 Nf3 f6',
		trick: true,
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},

	{
		id: 33,
		name: 'Blackmar-diemer gambit',
		line: 'd4 d5 e4 dxe4 Nc3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 34,
		name: 'Catalan Opening',
		line: 'd4 Nf6 c4 e6 g3',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=1393',
		},
	},
	{
		id: 56,
		name: "Queen's Gambit Declined: Catalan Opening",
		line: 'd4 Nf6 c4 e6 Nf3 d5 g3',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=1393',
		},
	},
	{
		id: 35,
		name: 'Ruy López Opening',
		line: 'e4 e5 Nf3 Nc6 Bb5',
		tierLists: {
			HLTierListBeginner: 'Really, bro',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=801',
		},
	},
	{
		id: 54,
		name: 'Ruy López Opening: Berlin Defense',
		line: 'e4 e5 Nf3 Nc6 Bb5 Nf6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 36,
		name: 'Ponziani opening',
		line: 'e4 e5 Nf3 Nc6 c3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 37,
		name: 'Three knights opening',
		line: 'e4 e5 Nf3 Nc6 Nc3',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 38,
		name: 'Italian game',
		line: 'e4 e5 Nf3 Nc6 Bc4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 39,
		name: 'Scotch game',
		line: 'e4 e5 Nf3 Nc6 d4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},

	{
		id: 40,
		name: 'Benko Gambit',
		line: 'd4 Nf6 c4 c5 d5 b5',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=626',
		},
	},
	{
		id: 41,
		name: 'Nimzo-indian defense',
		line: 'd4 Nf6 c4 e6 Nc3 Bb4',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 42,
		name: "Queen's indian defense",
		line: 'd4 Nf6 c4 e6 Nf3 b6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 43,
		name: 'Grünfeld defense',
		line: 'd4 Nf6 c4 g6 Nc3 d5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 44,
		name: "King's indian defense",
		line: 'd4 Nf6 c4 g6 Nc3 Bg7',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},

	{
		id: 45,
		name: 'Four knights game',
		line: 'e4 e5 Nf3 Nc6 Nc3 Nf6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 46,
		name: 'Giuoco piano',
		line: 'e4 e5 Nf3 Nc6 Bc4 Bc5',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 62,
		name: 'Giuoco Piano Game: Evans Gambit',
		line: 'e4 e5 Nf3 Nc6 Bc4 Bc5 b4',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=2368',
		},
	},
	{
		id: 47,
		name: 'Hungarian defense',
		line: 'e4 e5 Nf3 Nc6 Bc4 Be7',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 48,
		name: 'Two knights defense',
		line: 'e4 e5 Nf3 Nc6 Bc4 Nf6',
		tierLists: {
			HLTierListBeginner: undefined,
			HLTierListUrl: undefined,
		},
	},
	{
		id: 55,
		name: "Bird's Opening",
		line: 'f4',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=980',
		},
	},
	{
		id: 57,
		name: "King's Pawn Opening: The Bongcloud",
		line: 'e4 e5 Ke2',
		tierLists: {
			HLTierListBeginner: 'Garbage',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=1143',
		},
	},
	{
		id: 59,
		name: 'Danish Gambit',
		line: 'e4 e5 d4 exd4 c3',
		tierLists: {
			HLTierListBeginner: 'Legendary',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=1588',
		},
	},
	{
		id: 61,
		name: 'Englund Gambit',
		line: 'd4 e5',
		tierLists: {
			HLTierListBeginner: 'Legit',
			HLTierListUrl: 'https://youtu.be/M9CwH47r6og?t=2223',
		},
	},
] as const

export default openings
