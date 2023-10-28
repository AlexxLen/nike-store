import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './asyncActions';
import { NewsSliceState, Status } from './types';

const initialState: NewsSliceState = {
  items: [],
  status: Status.LOADING,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // fetchNews
    builder.addCase(fetchNews.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export default newsSlice.reducer;
