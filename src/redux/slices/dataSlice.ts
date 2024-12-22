import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    clearData: (state) => {
      state.data = [];
    },
  },
});

export const { setData, clearData } = dataSlice.actions;

export default dataSlice.reducer;