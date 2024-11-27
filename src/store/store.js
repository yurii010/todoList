import filteredTodosSlice from "../features/filteredTodosSlice.js";
import userDataSlice from "../features/userDataSlice";
import modalSlice from "../features/modalSlice";
import todoSlice from "../features/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userDataSlice,
    modal: modalSlice,
    todos: todoSlice,
    filteredTodos: filteredTodosSlice,
  },
});
