export type Game = {
  numbersSelected: number[];
  date: string;
  price: number;
  type: string;
  color: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  games: Game[];
};

export type UserSliceState = {
  actualUser: User | null;
  registeredUsers: User[];
};

export type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

export type LogInProps = {
  email: string;
  password: string;
};

export type SaveGameProps = {
  games: Game[];
};
