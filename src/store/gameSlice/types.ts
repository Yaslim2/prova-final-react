export type GameRules = {
  type: string;
  description: string;
  range: number;
  "max-number": number;
  color: string;
  price: number;
};

export type GameSliceState = {
  actualGame: GameRules;
  avaiableGames: GameRules[];
  avaiableBalls: number[];
  selectedBalls: number[];
  notSelectedBalls: number[];
  minValue: number;
  filteredGame: string | null;
};

export type GameTypeProps = {
  gameType: string | null;
};

export type SelectBallProps = {
  ball: number | null;
};
