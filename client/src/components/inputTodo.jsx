import { changeVisibilityToAddModal } from "../features/modalSlice";
import useSearchActions from "../hooks/useSearchActions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const InputTodo = () => {
  const { search, setSearchHandler } = useSearchActions();
  const [dots, setDots] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center">
      <input
        value={search}
        onChange={setSearchHandler}
        type="text"
        placeholder={`Find your plan here${dots}`}
        className="h-16 w-full mr-2 p-3 text-2xl blur-layout none-orange-input"
      />
      <button onClick={() => dispatch(changeVisibilityToAddModal(true))} type="button" className="flex items-center shadow-layout">
        <box-icon name="plus-circle" color="white" size="75px"></box-icon>
      </button>
    </div>
  );
};

export default InputTodo;
