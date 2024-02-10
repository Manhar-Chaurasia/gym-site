import { configureStore } from "@reduxjs/toolkit";
import newReducer from "../features/newSlice";

export const store = configureStore({
  reducer: { new: newReducer },
});
