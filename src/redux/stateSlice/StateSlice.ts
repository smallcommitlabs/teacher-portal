import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'state',
  initialState: {
    toggle: false,
    loading: false,
  },
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

const { reducer } = stateSlice;

export const { toggle } = stateSlice.actions;

export default reducer;
