import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import gamesJson from "../../assets/data/games.json";
interface GameRules {
  type: string;
  description: string;
  range: number;
  "max-number": number;
  color: string;
  price: number;
}

interface GameSliceState {
  actualGame: GameRules;
  avaiableGames: GameRules[];
  avaiableBalls: number[];
  selectedBalls: number[];
  notSelectedBalls: number[];
  minValue: number;
}

const generateArray = (range: number) => {
  return Array.from({ length: range }, (_, i) => i + 1);
};

const initialBalls = generateArray(gamesJson.types[0].range);
const generateRandomNumber = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};

const initialState: GameSliceState = {
  actualGame: gamesJson.types[0],
  avaiableGames: gamesJson.types,
  avaiableBalls: [...initialBalls],
  selectedBalls: [],
  notSelectedBalls: [...initialBalls],
  minValue: gamesJson["min-cart-value"],
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
        state.avaiableBalls = generateArray(gameSelected.range);
        state.selectedBalls = [];
        state.notSelectedBalls = generateArray(gameSelected.range);
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
        action.payload.ball && state.notSelectedBalls.push(action.payload.ball);
      } else {
        if (state.selectedBalls.length === state.actualGame["max-number"]) {
          alert(`Máximo de ${state.actualGame["max-number"]} atingido!`);
          return;
        }
        action.payload.ball && state.selectedBalls.push(action.payload.ball);
        state.notSelectedBalls = state.notSelectedBalls.filter(
          (ball) => action.payload.ball !== ball
        );
      }
    },
    completeGame: (state) => {
      const numberBallsSelected = state.selectedBalls.length;
      const numberBallsToBeSelected =
        state.actualGame["max-number"] - numberBallsSelected;
      if (numberBallsToBeSelected === 0) {
        alert("Falha ao completar o jogo pois ele já está completo!");
        return;
      }
      for (let i = 0; i < numberBallsToBeSelected; i++) {
        const randomBall = generateRandomNumber(
          0,
          state.notSelectedBalls.length - 1
        );
        const ballToBeAdded = state.notSelectedBalls[randomBall];
        state.selectedBalls.push(ballToBeAdded);
        state.notSelectedBalls = state.notSelectedBalls.filter(
          (ball) => ballToBeAdded !== ball
        );
      }
    },
    clearGame: (state) => {
      state.selectedBalls = [];
      state.notSelectedBalls = generateArray(state.actualGame.range);
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
