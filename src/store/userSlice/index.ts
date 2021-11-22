import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IsEmail from "isemail";
import {
  UserSliceState,
  SignUpProps,
  LogInProps,
  SaveGameProps,
} from "./types";

const initialState: UserSliceState = {
  actualUser: null,
  registeredUsers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<SignUpProps>) => {
      const existingUser = state.registeredUsers.find(
        (user) => user.email === action.payload.email
      );
      if (existingUser) {
        throw new Error(
          "Email already registered, try to register with another email."
        );
      }
      if (!IsEmail.validate(action.payload.email)) {
        throw new Error("Invalid email, please enter a valid email.");
      }
      if (action.payload.password.length < 5) {
        throw new Error(
          "Invalid password, please enter a password of at least 5 digits."
        );
      }
      state.registeredUsers.push({
        id: Math.random().toString(),
        games: [],
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      });
    },
    logIn: (state, action: PayloadAction<LogInProps>) => {
      const existingUser = state.registeredUsers.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (existingUser) {
        state.actualUser = existingUser;
      } else {
        throw new Error(
          "User not found, check your credentials and try again."
        );
      }
    },
    logOut: (state) => {
      state.registeredUsers = state.registeredUsers.filter(
        (user) => user.id !== state.actualUser!.id
      );
      if (state.actualUser) {
        state.registeredUsers = [...state.registeredUsers, state.actualUser];
      }
      state.actualUser = null;
    },
    saveGame: (state, action: PayloadAction<SaveGameProps>) => {
      state.actualUser!.games = [
        ...state.actualUser!.games,
        ...action.payload.games,
      ];
    },
    updateAccount: (state, action: PayloadAction<SignUpProps>) => {
      const existingUser = state.registeredUsers.find(
        (user) => user.email === action.payload.email
      );
      if (!IsEmail.validate(action.payload.email)) {
        throw new Error("Invalid email, please enter a valid email.");
      }
      if (existingUser && existingUser.email !== state.actualUser?.email) {
        throw new Error("Email already registered, try using another email.");
      }
      if (action.payload.password.length < 5) {
        throw new Error(
          "Invalid password, please enter a password of at least 5 digits."
        );
      }
      if (state.actualUser) {
        state.registeredUsers = state.registeredUsers.filter(
          (user) => user.id !== state.actualUser!.id
        );
        state.actualUser!.name = action.payload.name;
        state.actualUser!.email = action.payload.email;
        state.actualUser!.password = action.payload.password;
        state.registeredUsers = [...state.registeredUsers, state.actualUser];
      }
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
