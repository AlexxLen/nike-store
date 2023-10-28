import { createAsyncThunk } from '@reduxjs/toolkit';
import { NewsItem } from './types';

export const fetchNews = createAsyncThunk<NewsItem[]>('news/fetchNews', async () => {
  const response = await fetch('https://run.mocky.io/v3/9bc4fae5-742d-41de-b2b8-dcc4b77577a0');
  const data = await response.json();

  return data.news as NewsItem[];
});
