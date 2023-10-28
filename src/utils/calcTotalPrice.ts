import { CartItem } from '../app/cart/types';

export const calcTotalPrice = (items: CartItem[]): number => {
  return items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
};
