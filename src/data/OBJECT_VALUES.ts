export interface Values {
  category: string;
  conditions: Array<any>;
}

export const OBJECT_VALUES: Values[] = [
  {
    category: 'Overall Game Played',
    conditions: [{ count: 0 }],
  },
  {
    category: 'Overall Game Result',
    conditions: [{ wins: 0 }, { losses: 0 }, { draws: 0 }],
  },
  {
    category: 'Overall Color',
    conditions: [{ whiteCount: 0 }, { blackCount: 0 }],
  },
  {
    category: 'Overall Timeclass',
    conditions: [
      { rapidGames: 0 },
      { blitzGames: 0 },
      { bulletGames: 0 },
      { dailyGames: 0 },
    ],
  },
  {
    category: 'Timeclass + Color',
    conditions: [
      { rapidGamesWhite: 0 },
      { blitzGamesWhite: 0 },
      { bulletGamesWhite: 0 },
      { dailyGamesWhite: 0 },
      { rapidGamesBlack: 0 },
      { blitzGamesBlack: 0 },
      { bulletGamesBlack: 0 },
      { dailyGamesBlack: 0 },
    ],
  },
  {
    category: 'Timeclass + Game Result',
    conditions: [
      { rapidWins: 0 },
      { rapidLosses: 0 },
      { rapidDraws: 0 },
      { blitzWins: 0 },
      { blitzLosses: 0 },
      { blitzDraws: 0 },
      { bulletWins: 0 },
      { bulletLosses: 0 },
      { bulletDraws: 0 },
      { dailyWins: 0 },
      { dailyLosses: 0 },
      { dailyDraws: 0 },
    ],
  },
];
