import { getRegistration } from "../features/userDataSlice";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import validator from "validator";

const useRegisterPageActions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [badPass, setBadPass] = useState(false);
  const [passwords, setPasswords] = useState({ onePass: "", twoPass: "" });
  const [messageColor, setMessageColor] = useState(false);
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState({
    email: "",
    username: "",
    password: passwords.twoPass,
  });

  const handleVisibility = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleFill = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validator.isEmail(info.email)) {
        setMessageColor(false);
        return setMessage("Enter valid email");
      } else if (info.email.length > 50) {
        setMessageColor(false);
        return setMessage("Email must be less than 50 characters");
      } else if (info.username.length < 5 || info.username.length > 25) {
        setMessageColor(false);
        return setMessage("Enter your username from 5 to 25 characters");
      } else if (badPass) {
        setMessageColor(false);
        return setMessage("");
      } else {
        setIsLoading(true);
        const response = await dispatch(getRegistration(info));
        setMessage(response.payload);
        setMessageColor(true);
        setInfo({ email: "", username: "", password: "" });
        setPasswords({ onePass: "", twoPass: "" });
      }
    } catch (error) {
      setMessageColor(false);
      setMessage(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    token ? navigate("/") : navigate("/registration");
  }, [navigate, token]);

  useEffect(() => {
    inputRef.current.type = showPass ? "text" : "password";
  }, [showPass]);

  useEffect(() => {
    setBadPass(passwords.onePass !== passwords.twoPass);
  }, [passwords]);

  return { message, messageColor, passwords, isLoading, showPass, inputRef, info, badPass, handleChange, handleVisibility, handleSubmit, handleFill };
};

export default useRegisterPageActions;
