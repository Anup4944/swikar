import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../feature/todo/todoSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({ reducer: todoSlice });

setupListeners(store.dispatch);
