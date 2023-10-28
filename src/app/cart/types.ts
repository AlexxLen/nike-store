export type CartItem = {
  id: string;
  title: string;
  text: string;
  rating: number;
  img: string;
  price: number;
  color: string;
  shadow: string;
  count: number;
};

export type CartSliceState = {
  cartOpened: boolean;
  items: CartItem[];
  totalPrice: number;
  totalCount: number;
};
