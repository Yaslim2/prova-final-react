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
          "E-mail já cadastrado, tente se registrar com outro e-mail."
        );
      }
      if (!IsEmail.validate(action.payload.email)) {
        throw new Error("Email inválido, por favor entre com um email válido.");
      }
      if (action.payload.password.length < 5) {
        throw new Error("Senha inválida, por favor entre com uma senha.");
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
          "Usuário não encontrado, verifique suas credenciais e tente novamente."
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
  },
});

export const userActions = userSlice.actions;

export default userSlice;
