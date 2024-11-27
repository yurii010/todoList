import { createSlice } from "@reduxjs/toolkit";

export const filteredTodosSlice = createSlice({
  name: "filteredTodos",
  initialState: {
    todos: [],
  },
  reducers: {
    setFilteredTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { setFilteredTodos } = filteredTodosSlice.actions;
export default filteredTodosSlice.reducer;