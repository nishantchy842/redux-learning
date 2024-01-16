import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reduces";

export const store = configureStore({
  reducer: { todo: counterSlice },
});


//git fetch
//git pull origin develop
