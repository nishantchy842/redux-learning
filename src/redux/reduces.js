import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    box: {
      height: "200px",
      width: "200px",
      border: "1px solid red",
      backgroundColor: "blue",
    },
    percent: "0%",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setChangeBackgroundColor: (state, payload) => {
      state.box.backgroundColor = payload.payload;
    },
    setHeight: (state, payload) => {
      state.box.height = payload.payload;
    },
    setProgress: (state, payload) => {
      state.percent += payload.payload + "%";
    },
  },
});

// Action creators are generated for each case reducer function

const { reducer, actions } = counterSlice;
export const { increment, decrement, incrementByAmount } = actions;

export default reducer;
