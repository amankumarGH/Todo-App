import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./redux/PasteSlice";

export const Store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
