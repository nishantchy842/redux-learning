import { createSlice } from '@reduxjs/toolkit';

const boxSlice = createSlice({
  name: 'box',
  initialState: { color: 'red' },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setColor } = boxSlice.actions;
export default boxSlice.reducer;
