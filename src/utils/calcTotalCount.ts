import { CartItem } from '../app/cart/types';

export const calcTotalCount = (items: CartItem[]): number => {
  return items.reduce((sum, obj) => sum + obj.count, 0);
};
