import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTasks = createAsyncThunk("task/fetchUserTasks", async (uid, { rejectWithValue }) => {
  try {
    const response = await axios.post(process.env.REACT_APP_TASK_API, { uid: uid });
    return response.data.tasks;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getTask = createAsyncThunk("task/getTask", async (taskId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_TASK_API}/${taskId}`);
    return response.data.task;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addTodo = createAsyncThunk("task/addTask", async (taskData, { rejectWithValue }) => {
  try {
    const response = await axios.post(process.env.REACT_APP_TASK_API_CREATE, { taskData: taskData });
    return response.data.task;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteTask = createAsyncThunk("task/deleteTask", async (taskId, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_TASK_API}/${taskId}`);
    return response.data.taskId;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const changeCompletedTask = createAsyncThunk("task/changeCompletedTask", async (taskData, { rejectWithValue }) => {
  const { taskId, status } = taskData;
  try {
    const response = await axios.patch(`${process.env.REACT_APP_TASK_API_COMPLETED}/${taskId}?completed=${!status}`);
    return response.data.task;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const changeTask = createAsyncThunk("task/changeTask", async (taskData, { rejectWithValue }) => {
  try {
    const response = await axios.patch(process.env.REACT_APP_TASK_API, { taskData: taskData });
    return response.data.task;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    status: "idle",
    error: "",
    todos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(changeCompletedTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload;
        const index = state.todos.findIndex((todo) => todo.taskId === updatedTask.taskId);
        if (index !== undefined || null) {
          state.todos[index] = updatedTask;
        }
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newTask = action.payload;
        state.todos.push(newTask);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = state.todos.filter((todo) => todo.taskId !== action.payload);
      })
      .addCase(changeTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { taskId, taskTitle, taskText } = action.payload;
        const toggleTodo = state.todos.find((todo) => todo.taskId === taskId);
        toggleTodo.taskTitle = taskTitle;
        toggleTodo.taskText = taskText;
      });
  },
});

// export const {} = todoSlice.actions;
export default todoSlice.reducer;
