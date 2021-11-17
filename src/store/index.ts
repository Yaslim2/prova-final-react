import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import gameSlice from "./gameSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    game: gameSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
