import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemCart {
  numbers: number[];
  gameType: string;
  gamePrice: number;
  id: string;
}

interface CartSliceState {
  items: ItemCart[];
  totalPrice: number;
}

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
        numbers: action.payload.numbers,
        gameType: action.payload.gameType,
        gamePrice: action.payload.gamePrice,
        id: action.payload.id,
      };
      state.items.push(item);
      state.totalPrice += action.payload.gamePrice;
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => {
        state.totalPrice -= item.gamePrice;
        return item.id !== action.payload.id;
      });
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
