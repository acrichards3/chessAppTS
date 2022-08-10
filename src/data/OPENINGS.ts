function OPENINGS() {
  const names: string[] = [
    "King's Fianchetto Opening",
    "Queen's Pawn Opening",
    'Réti Opening',
    "Bird's Opening",
    'Nimzowitsch-Larsen Attack',
    "King's Pawn Opening",
    'English Opening',
    'English Opening Symmetrical Variation',
    "Alekhine's Defense",
    'Caro-Kann Defense',
    'Modern Defense with 1.d4',
    'Sicilian Defense',
    'Scandinavian Defense',
    'Dutch Defense',
    'French Defense',
    'Pirc Defense',
    'Old Benoni Defense',
    "English Opening King's English Variation",
    'Sicilian Defense Closed',
    'Trompowsky Attack',
    'Réti Opening Réti Gambit',
    'Vienna Game',
    "Queen's Gambit",
    "King's Gambit",
    "King's Indian Attack",
    "Bishop's Opening",
    "Queen's Pawn Opening mar Gambit",
    'Sicilian Defense Alapin Variation',
    'Sicilian Defense Smith-Morra Gambit',
    'Slav Defense',
    'Budapest Gambit',
    "King's Gambit Declined Falkbeer Countergambit",
    "King's Gambit Declined Classical Variation",
    "King's Gambit Accepted",
    "Petrov's Defense",
    "King's Indian Defense",
    "Queen's Gambit Accepted",
    'Scandinavian Defense Modern Variation',
    'Dutch Defense Staunton Gambit Accepted',
    'Old Indian Defense',
    'Philor Defense',
    "Queen's Gambit Declined Albin Countergambit",
    "Queen's Gambit Declined Chigorin Defense",
    'Caro-Kann Defense Exchange Variation',
    'Sicilian Defense Grand Prix Attack',
    'London System',
    "Queen's Pawn Opening Torre Attack",
    'Catalan Opening',
    'French Defense Advance Variation',
    "Petrov's Defense Steinitz Attack",
    'Center Game Accepted Danish Gambit',
    "Petrov's Defense Three Knights Game",
    'French Defense Exchange Variation',
    'Ruy López Opening',
    'Italian Game',
    'Scotch Game',
    'French Defense Tarrasch Variation',
    "King's Gambit Accepted Bishop's Gambit",
    'Caro-Kann Defense Advance Variation',
    'Richter-Veresov Attack',
    'Grünfeld Defense',
    "Queen's Indian Defense",
    'Modern Defense Standard Pterodactyl Defense',
    'Four Knights Game',
    "King's Gambit Accepted Modern Defense",
    'Benko Gambit',
    'Ruy López Opening Classical Defense',
    'Nimzo-Indian Defense',
    'French Defense Classical Variation',
    'Benoni Defense Modern Variation',
    'Italian Game Hungarian Defense',
    'Giuoco Piano Game',
    'French Defense Rubinstein Variation',
    'Italian Game Two Knights Defense',
    "King's Indian Defense Normal Variation",
    'French Defense Winawer Variation',
    'Ruy López Opening Jaenisch Gambit',
    "Queen's Gambit Declined Pseudo-Tarrasch Defense",
    'Ruy López Opening Berlin Defense',
    'Ruy López Opening Old Steinitz Defense',
    'Bogo-Indian Defense',
    'Caro-Kann Defense Panov Attack',
    'Grünfeld Defense Stockholm Variation',
    'Grünfeld Defense Three Knights Variation',
    'Four Knights Game Scotch Variation',
    'Nimzo-Indian Defense Classical Variation',
    'Catalan Opening Closed',
    'Giuoco Piano Game Evans Gambit',
    'Ruy López Opening Morphy Defense Exchange Variation',
    'Grünfeld Defense Brinckmann Attack',
    'Pirc Defense Main Line Austrian Attack',
    'Pirc Defense Classical Variation',
    'Caro-Kann Defense Classical Variation',
    'Sicilian Defense Kan Variation',
    'Nimzo-Indian Defense Hübner Variation',
    'Scotch Game Classical Variation',
    'French Defense Classical Burn Variation',
    'Scotch Game Steinitz Variation',
    'Sicilian Defense Taimanov Variation',
    'Semi-Slav Defense',
    "Queen's Gambit Declined Three Knights Semi-Tarrasch Defense",
    'Sicilian Defense Old Sicilian Open Accelerated Dragon Variation',
    'Grünfeld Defense Exchange Variation',
    "Petrov's Defense Classical Attack",
    'Nimzo-Indian Defense Hübner Rubinstein Variation',
    'Nimzo-Indian Defense Sämisch Variation',
    'Dutch Defense Leningrad Main Line',
    "King's Indian Defense Normal Fianchetto Variation",
    "King's Indian Defense Four Pawns Attack",
    "King's Indian Defense Sämisch Variation",
    'Sicilian Defense Open Dragon Variation',
    'Sicilian Defense Open Najdorf Variation',
    'Sicilian Defense Open Scheveningen Variation',
    "King's Indian Defense Averbakh Variation",
    'Scotch Game Schmt Mieses Variation',
    "King's Indian Defense Orthodox Variation",
    'Sicilian Defense Open Classical Richter-Rauzer Variation',
    'Dutch Defense Stonewall Variation',
    "Queen's Gambit Declined Orthodox Defense",
    "King's Indian Defense Bayonet Attack",
    "King's Pawn Opening: Důras Gambit",
    'Indian Game: Knights Variation',
  ];
  const createObjs = () => {
    return names.map((value: string, i: number) => ({
      id: i,
      name: value,
      url: value
        .replaceAll("'", '')
        .replaceAll(':', '')
        .replaceAll(' ', '-')
        .replaceAll('.', '-')
        .replaceAll('ä', 'a')
        .replaceAll('é', 'e')
        .replaceAll('ó', 'o')
        .replaceAll('ü', 'u')
        .replaceAll('ů', 'u'),
      count: 0,

      whiteCount: 0,
      blackCount: 0,

      wins: 0,
      losses: 0,
      draws: 0,

      rapidGames: 0,
      blitzGames: 0,
      bulletGames: 0,
      dailyGames: 0,

      rapidGamesWhite: 0,
      blitzGamesWhite: 0,
      bulletGamesWhite: 0,
      dailyGamesWhite: 0,
      rapidGamesBlack: 0,
      blitzGamesBlack: 0,
      bulletGamesBlack: 0,
      dailyGamesBlack: 0,
      
      rapidWins: 0,
      rapidLosses: 0,
      rapidDraws: 0,
      blitzWins: 0,
      blitzLosses: 0,
      blitzDraws: 0,
      bulletWins: 0,
      bulletLosses: 0,
      bulletDraws: 0,
      dailyWins: 0,
      dailyLosses: 0,
      dailyDraws: 0,
    }));
  };
  return createObjs();
}

export default OPENINGS;
