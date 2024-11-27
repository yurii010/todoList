import { changeVisibilityToAddModal } from "../features/modalSlice";
import { addTodo } from "../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { v4 } from "uuid";

const useAddModalAction = () => {
  const visibility = useSelector((state) => state.modal.visibilityAdd);
  const userData = useSelector((state) => state.user.user);
  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const dispatch = useDispatch();

  const createTodoHandler = () => {
    const todo = {
      taskId: v4(),
      uid: userData.uid,
      taskTitle: titleValue,
      taskText: textValue,
      completed: false,
    };
    dispatch(addTodo(todo));
  };

  const closeModal = () => {
    dispatch(changeVisibilityToAddModal(false));
    setTitleValue("");
    setTextValue("");
  };

  const onClickHandler = () => {
    if (titleValue !== "" && textValue !== "") {
      closeModal();
      createTodoHandler();
    }
  };

  return { visibility, titleValue, textValue, setTitleValue, setTextValue, onClickHandler, closeModal };
};

export default useAddModalAction;
