import { changeVisibilityToChangeModal, changeId, setModalValue } from "../features/modalSlice";
import { changeTask } from "../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useChangeModalAction = () => {
  const dispatch = useDispatch();
  const visibility = useSelector((state) => state.modal.visibilityChange);
  const changedId = useSelector((state) => state.modal.changedId);
  const valueTask = useSelector((state) => state.modal.changeModalValue);
  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setTitleValue(valueTask.taskTitle);
    setTextValue(valueTask.taskText);
  }, [valueTask]);

  const onChangeTodo = (todo) => {
    if (!todo.completed) {
      const text = {
        title: todo.taskTitle,
        text: todo.taskText,
      };
      dispatch(setModalValue(text));
      dispatch(changeVisibilityToChangeModal(true));
      dispatch(changeId(todo.taskId));
    }
  };

  const changeTodoHandler = () => {
    if (titleValue !== "" && textValue !== "") {
      const changedTask = {
        taskId: changedId,
        taskTitle: titleValue,
        taskText: textValue,
      };
      dispatch(changeTask(changedTask));
    }
  };

  const closeModal = () => {
    dispatch(changeVisibilityToChangeModal(false));
  };

  const onClickHandler = () => {
    if (titleValue !== "" && textValue !== "") {
      closeModal();
      changeTodoHandler();
    }
  };

  return { visibility, titleValue, textValue, setTextValue, setTitleValue, onClickHandler, closeModal, onChangeTodo };
};

export default useChangeModalAction;
