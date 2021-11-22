import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSliceState, ItemCart, RemoveFromCartProps } from "./types";
import { sameValues } from "@helpers/index";

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ItemCart>) => {
      const item = {
        numbers: action.payload.numbers.sort((a: number, b: number) => a - b),
        gameType: action.payload.gameType,
        gamePrice: action.payload.gamePrice,
        id: action.payload.id,
        mainColor: action.payload.mainColor,
      };
      const sameTypeGameExisting = state.items.filter(
        (game) => game.gameType === item.gameType
      );
      sameTypeGameExisting.forEach((game) => {
        if (sameValues(game.numbers, item.numbers)) {
          throw new Error("The game you tried to add already exists.");
        }
      });
      state.items.push(item);
      state.totalPrice += action.payload.gamePrice;
    },
    removeFromCart: (state, action: PayloadAction<RemoveFromCartProps>) => {
      state.items = state.items.filter((item) => {
        if (item.id === action.payload.id) {
          state.totalPrice -= item.gamePrice;
        }
        return item.id !== action.payload.id;
      });
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
