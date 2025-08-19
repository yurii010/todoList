import { getAuth } from "../features/userDataSlice";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const useAuthActions = () => {
  const [data, setData] = useState({ email: "test@gmail.com", password: "123123C!" });
  const [showPass, setShowPass] = useState(true);
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVisibility = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleFill = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await dispatch(getAuth(data));
      localStorage.setItem("token", token.payload);
      if (token) {
        navigate("/");
      } else {
        setMessage("Error authorization");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    token ? navigate("/") : navigate("/authorization");
  }, [navigate, token]);

  useEffect(() => {
    inputRef.current.type = showPass ? "text" : "password";
  }, [showPass]);

  return { data, inputRef, showPass, message, handleVisibility, handleFill, handleSubmit };
};

export default useAuthActions;