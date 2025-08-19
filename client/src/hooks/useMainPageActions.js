import { getUserData, userLogout } from "../features/userDataSlice";
import { getAllTasks } from "../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useMainPageActions = () => {
  const userData = useSelector((state) => state.user.user);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    await dispatch(userLogout(token));
    navigate("/authorization");
  };

  useEffect(() => {
    const func = async () => {
      try {
        const userResult = await dispatch(getUserData(token));
        await dispatch(getAllTasks(userResult.payload.uid));
      } catch (error) {
        console.log(error);
      }
    };

    token ? func() : navigate("/authorization");
  }, [token, navigate, dispatch]);

  return { userData, logout };
};

export default useMainPageActions;
