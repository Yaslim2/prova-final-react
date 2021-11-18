export type ItemCart = {
  numbers: number[];
  gameType: string;
  gamePrice: number;
  id: string;
  mainColor: string;
};

export type CartSliceState = {
  items: ItemCart[];
  totalPrice: number;
};

export type RemoveFromCartProps = {
  id: string;
};
