import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  count: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementNumber: (state, action) => {
      state.value += action.payload;
    },
    decrementNumber: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

const { reducer, actions } = counterSlice;
export const { increment, decrement, incrementNumber, decrementNumber } =
  actions;

export default reducer;
