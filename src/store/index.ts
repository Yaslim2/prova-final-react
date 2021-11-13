import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import gameSlice from "./gameSlice";
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    game: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
