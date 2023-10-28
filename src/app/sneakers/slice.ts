import { createSlice } from '@reduxjs/toolkit';
import { fetchItems, fetchPopularItems } from './asyncActions';
import { SneakersSliceState, Status } from './types';

const initialState: SneakersSliceState = {
  items: [],
  popularItems: [],
  status: Status.LOADING,
};

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // fetchItems
    builder.addCase(fetchItems.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    });

    // fetch Popular Items
    builder.addCase(fetchPopularItems.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchPopularItems.fulfilled, (state, action) => {
      state.popularItems = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPopularItems.rejected, (state) => {
      state.popularItems = [];
      state.status = Status.ERROR;
    });
  },
});

export default sneakersSlice.reducer;
