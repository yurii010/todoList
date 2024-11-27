import { setFilteredTodos } from "../features/filteredTodosSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useSearchActions = () => {
  const todos = useSelector((state) => state.todos.todos);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (search === "") {
      dispatch(setFilteredTodos(todos));
    } else if (search !== "") {
      const filteredTodo = todos.filter((todo) => todo.taskTitle.toLowerCase().includes(search.toLowerCase()));
      dispatch(setFilteredTodos(filteredTodo));
    }
  }, [search, todos, dispatch]);

  const setSearchHandler = (e) => {
    setSearch(e.target.value);
  };

  return { search, setSearchHandler };
};
export default useSearchActions;
