import { CartSliceState } from '../app/cart/types';
import { calcTotalCount } from './calcTotalCount';
import { calcTotalPrice } from './calcTotalPrice';

export const getCartFromLS = (): CartSliceState => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  const totalCount = calcTotalCount(items);

  return {
    cartOpened: false,
    items,
    totalPrice,
    totalCount,
  };
};
