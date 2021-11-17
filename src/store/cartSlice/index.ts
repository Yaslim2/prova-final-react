import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemCart {
  numbers: number[];
  gameType: string;
  gamePrice: number;
  id: string;
  mainColor: string;
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
        mainColor: action.payload.mainColor,
      };
      state.items.push(item);
      state.totalPrice += action.payload.gamePrice;
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
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
