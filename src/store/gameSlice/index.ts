import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import gamesJson from "../../assets/data/games.json";
interface GameRules {
  type: string;
  description: string;
  range: number;
  "max-number": number;
  color: string;
}

interface GameSliceState {
  actualGame: GameRules;
  avaiableGames: GameRules[];
  avaiableBalls: number[];
  selectedBalls: number[];
}
const initialState: GameSliceState = {
  actualGame: gamesJson.types[0],
  avaiableGames: gamesJson.types,
  avaiableBalls: Array.from(Array(gamesJson.types[0].range).keys()),
  selectedBalls: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    selectGame: (state, action: PayloadAction<{ gameType: string | null }>) => {
      const gameSelected = state.avaiableGames.find(
        (game) => game.type === action.payload.gameType
      );
      if (gameSelected) {
        state.actualGame = gameSelected;
        state.avaiableBalls = Array.from(Array(gameSelected.range).keys());
      }
    },
    selectBall: (state, action: PayloadAction<{ ball: number | null }>) => {
      const ballExists = state.selectedBalls.find(
        (ball) => ball === action.payload.ball
      );

      if (ballExists) {
        state.selectedBalls = state.selectedBalls.filter(
          (ball) => ball !== action.payload.ball
        );
      } else {
        if (state.selectedBalls.length === state.actualGame["max-number"]) {
          alert(`Máximo de ${state.actualGame["max-number"]} atingido!`);
          return;
        }
        action.payload.ball && state.selectedBalls.push(action.payload.ball);
      }
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
