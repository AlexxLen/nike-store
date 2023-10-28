import { createAsyncThunk } from '@reduxjs/toolkit';
import { SneakersItem } from './types';

export const fetchItems = createAsyncThunk<SneakersItem[]>('sneakers/fetchItems', async () => {
  const response = await fetch('https://run.mocky.io/v3/97c0c270-0a8b-4b75-9443-90090e822a16');
  const data = await response.json();

  return data.items as SneakersItem[];
});

export const fetchPopularItems = createAsyncThunk<SneakersItem[]>(
  'sneakers/fetchPopularItems',
  async () => {
    const response = await fetch('https://run.mocky.io/v3/43ecdf03-df52-4448-b2f7-40b9bc6bde44');
    const data = await response.json();

    return data.items as SneakersItem[];
  },
);
