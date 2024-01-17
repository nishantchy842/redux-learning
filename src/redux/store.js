import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reduces";
import boxReducer from './boxSlice';

export const store = configureStore({
  reducer: { todo: counterSlice, box:boxReducer },
});


//git fetch
//git pull origin develop
