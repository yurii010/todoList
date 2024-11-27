import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    visibilityAdd: false,
    visibilityChange: false,
    changedId: "",
    changeModalValue: { taskTitle: "", taskText: "" },
  },
  reducers: {
    changeId: (state, action) => {
      state.changedId = action.payload;
    },
    setModalValue: (state, action) => {
      const { title, text } = action.payload;
      state.changeModalValue.taskTitle = title;
      state.changeModalValue.taskText = text;
    },
    changeVisibilityToAddModal: (state, action) => {
      state.visibilityAdd = action.payload;
    },
    changeVisibilityToChangeModal: (state, action) => {
      state.visibilityChange = action.payload;
    },
  },
});

export const { changeVisibilityToAddModal, changeVisibilityToChangeModal, changeId, setModalValue } = modalSlice.actions;
export default modalSlice.reducer;
