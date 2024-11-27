import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import React from "react";

const App = () => {

  return (
    <Routes>
      <Route path={"/"} element={<MainPage />}></Route>
      <Route path={"/authorization"} element={<AuthPage />}></Route>
      <Route path={"/registration"} element={<RegisterPage />}></Route>
      <Route path={"/profile"} element={<ProfilePage />}></Route>
    </Routes>
  );
};

export default App;
