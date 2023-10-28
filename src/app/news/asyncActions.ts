import { createAsyncThunk } from '@reduxjs/toolkit';
import { NewsItem } from './types';

export const fetchNews = createAsyncThunk<NewsItem[]>('news/fetchNews', async () => {
  const response = await fetch(import.meta.env.VITE_NEWS_URL);
  const data = await response.json();

  return data.news as NewsItem[];
});
