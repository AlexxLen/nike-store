import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cart from './cart/slice';
import news from './news/slice';
import sneakers from './sneakers/slice';

export const store = configureStore({
  reducer: {
    cart,
    sneakers,
    news,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
