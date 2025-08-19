import useChangeModalAction from "../hooks/useChangeModalActions";
import useTodoActions from "../hooks/useTodoActions";

const TodoItem = ({ todo }) => {
  const { onChangeComplete, onDelete } = useTodoActions();
  const { onChangeTodo } = useChangeModalAction();

  return (
    <div className="w-full h-full flex flex-col blur-layout p-2">
      <div className="w-full flex justify-between">
        <div className="flex">
          <p className={`text-2xl break-all ${todo.completed ? `line-through text-lime-500` : `text-white`}`}>{todo.taskTitle}</p>
        </div>
        <div className="flex flex-row">
          <button onClick={() => onChangeComplete(todo.taskId, todo.completed)} className="flex items-center shadow-layout" type="button">
            <box-icon name="check-circle" color="white" size="25px"></box-icon>
          </button>
          <button onClick={() => onChangeTodo(todo)} className="flex items-center shadow-layout" type="button" disabled={todo.completed}>
            <box-icon name="edit" color="white" size="25px"></box-icon>
          </button>
          <button onClick={() => onDelete(todo.taskId)} className="flex items-center shadow-layout" type="button">
            <box-icon name="trash" color="white" size="25px"></box-icon>
          </button>
        </div>
      </div>
      <hr className="border-[rgba(118,160,218)] pb-2" />
      <div>
        <p className={`text-lg break-all ${todo.completed ? `line-through text-lime-500` : `text-white`}`}>{todo.taskText}</p>
      </div>
    </div>
  );
};

export default TodoItem;
