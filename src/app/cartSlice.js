import { createSlice } from '@reduxjs/toolkit';
import { calcTotalCount } from '../utils/calcTotalCount';
import { calcTotalPrice } from '../utils/calcTotalPrice';
import { getCartFromLS } from '../utils/getCartFromLS';

const initialState = getCartFromLS();

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setCartOpened: (state, action) => {
      state.cartOpened = action.payload.cartOpened;
    },
    addItemToCart: (state, action) => {
      const findItem = state.cartItems.find((item) => item.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalPrice(state.cartItems);
      state.totalCount = calcTotalCount(state.cartItems);
    },
    increaseCartItem: (state, action) => {
      const findItem = state.cartItems.find((item) => item.id === action.payload);
      if (findItem.count === 20) return;
      findItem.count++;
      state.totalPrice = calcTotalPrice(state.cartItems);
      state.totalCount = calcTotalCount(state.cartItems);
    },
    decreaseCartItem: (state, action) => {
      const findItem = state.cartItems.find((item) => item.id === action.payload);
      if (findItem.count === 1) return;
      findItem.count--;
      state.totalPrice = calcTotalPrice(state.cartItems);
      state.totalCount = calcTotalCount(state.cartItems);
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.cartItems);
      state.totalCount = calcTotalCount(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = calcTotalPrice(state.cartItems);
      state.totalCount = calcTotalCount(state.cartItems);
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

export const selectCartOpened = (state) => state.cart.cartOpened;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectTotalCount = (state) => state.cart.totalCount;

export default cartSlice.reducer;
