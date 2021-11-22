import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gamesJson } from "@assets/data";
import { GameSliceState, SelectBallProps, GameTypeProps } from "./types";
import { generateArray, generateRandomNumber } from "@helpers/index";

const initialBalls = generateArray(gamesJson.types[0].range);

const initialState: GameSliceState = {
  actualGame: gamesJson.types[0],
  avaiableGames: gamesJson.types,
  avaiableBalls: [...initialBalls],
  selectedBalls: [],
  notSelectedBalls: [...initialBalls],
  minValue: gamesJson["min-cart-value"],
  filteredGame: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    selectGame: (state, action: PayloadAction<GameTypeProps>) => {
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
    selectBall: (state, action: PayloadAction<SelectBallProps>) => {
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
          throw new Error(
            `Max of ${state.actualGame["max-number"]} numbers hit!`
          );
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
        throw new Error(
          "Your game could not be completed as it is already complete!"
        );
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
    filterGame: (state, action: PayloadAction<GameTypeProps>) => {
      const gameToBeFiltered = state.avaiableGames.find(
        (game) => game.type === action.payload.gameType
      );
      const isAlreadyFiltered = state.filteredGame?.find(
        (filteredGame) => filteredGame === action.payload.gameType
      );
      if (isAlreadyFiltered) {
        state.filteredGame = state.filteredGame!.filter(
          (filteredGame) => filteredGame !== isAlreadyFiltered
        );
        return;
      }
      state.filteredGame?.push(gameToBeFiltered!.type);
    },
    resetGame: (state) => {
      state.actualGame = initialState.actualGame;
      state.filteredGame = [];
      state.avaiableBalls = generateArray(state.actualGame.range);
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
