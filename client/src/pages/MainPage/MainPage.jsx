import ChangeModal from "../../components/ChangeModal";
import InputTodo from "../../components/inputTodo";
import AddModal from "../../components/AddModal";
import TodoList from "../../components/TodoList";
import NavBar from "../../components/NavBar";
import "./MainPage.scss";

const MainPage = () => {

  return (
    <div className="page-div w-full h-full relative">
      <NavBar />
      <AddModal />
      <ChangeModal />
      <div className="container m-auto h-full flex justify-center ">
        <div className="w-6/12 h-full py-5">
          <InputTodo />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
