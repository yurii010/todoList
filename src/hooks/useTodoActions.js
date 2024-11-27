import { changeCompletedTask, deleteTask } from "../features/todoSlice.js";
import { useDispatch } from "react-redux";

const useTodoActions = () => {
  const dispatch = useDispatch();

  const onChangeComplete = (id, completed) => {
    const userData = { taskId: id, status: completed };
    dispatch(changeCompletedTask(userData));
  };

  const onDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return { onChangeComplete, onDelete };
};

export default useTodoActions;
