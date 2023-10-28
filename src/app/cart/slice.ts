import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { calcTotalCount } from '../../utils/calcTotalCount';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartItem } from './types';

const initialState = getCartFromLS();

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setCartOpened: (state, action: PayloadAction<boolean>) => {
      state.cartOpened = action.payload;
    },
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        if (findItem.count >= 20) return;
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    increaseCartItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (!findItem) return;
      if (findItem.count >= 20) return;
      findItem.count++;

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    decreaseCartItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (!findItem) return;
      if (findItem.count <= 1) return;
      findItem.count--;

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    clearCart: (state) => {
      state.items = [];

      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const {
  setCartOpened,
  addItemToCart,
  increaseCartItem,
  decreaseCartItem,
  removeCartItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
