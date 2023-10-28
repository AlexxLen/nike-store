import { RootState } from '../store';

export const selectCartOpened = (state: RootState) => state.cart.cartOpened;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectTotalCount = (state: RootState) => state.cart.totalCount;
