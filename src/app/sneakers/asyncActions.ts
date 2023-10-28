import { createAsyncThunk } from '@reduxjs/toolkit';
import { SneakersItem } from './types';

export const fetchItems = createAsyncThunk<SneakersItem[]>('sneakers/fetchItems', async () => {
  const response = await fetch(import.meta.env.VITE_ITEMS_URL);
  const data = await response.json();

  return data.items as SneakersItem[];
});

export const fetchPopularItems = createAsyncThunk<SneakersItem[]>(
  'sneakers/fetchPopularItems',
  async () => {
    const response = await fetch(import.meta.env.VITE_POPULAR_ITEMS_URL);
    const data = await response.json();

    return data.items as SneakersItem[];
  },
);
