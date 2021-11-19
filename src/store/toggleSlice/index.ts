import { createSlice } from "@reduxjs/toolkit";
import { ToggleSliceState } from "./types";

const initialState: ToggleSliceState = {
  isToggle: false,
};
const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isToggle = !state.isToggle;
      console.log(state.isToggle);
    },
  },
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice;
