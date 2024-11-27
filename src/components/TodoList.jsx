import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const filteredTodos = useSelector((state) => state.filteredTodos.todos);
  return (
    <div className="flex flex-col gap-y-3 my-3 justify-start items-center">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.taskId} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
