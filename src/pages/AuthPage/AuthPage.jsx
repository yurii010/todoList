import useAuthActions from "../../hooks/useAuthActions";
import { Link } from "react-router-dom";
import "./AuthPage.scss";
import "boxicons";

const AuthPage = () => {
  const { data, inputRef, showPass, message, handleVisibility, handleFill, handleSubmit } = useAuthActions();

  return (
    <div className="auth-page-div w-full h-full fixed">
      <div className="container m-auto h-full flex justify-center items-center">
        <div className="form-div w-80 text-white">
          <form onSubmit={handleSubmit} className="select-none">
            <h1 className="text-center text-3xl py-3">Sign In</h1>
            <p className="py-1 px-5">Write your e-mail</p>
            <div className="input-div relative mb-3">
              <input
                name="email"
                type="text"
                onChange={handleFill}
                value={data.email}
                placeholder="E-mail"
                className="w-[calc(100%-2.5rem)] h-10 mx-5 px-3 pr-9 rounded-3xl bg-transparent border border-[rgba(118,160,218)]"
                required
              />
              <box-icon name="user" color="white" />
            </div>
            <p className="py-1 px-5">Write your password</p>
            <div className="input-div relative">
              <input
                name="password"
                type="text"
                onChange={handleFill}
                value={data.password}
                ref={inputRef}
                placeholder="Password"
                className="w-[calc(100%-2.5rem)] h-10 mx-5 px-3 pr-9 rounded-3xl bg-transparent border border-[rgba(118,160,218)]"
                required
              />
              {showPass ? (
                <box-icon name="hide" color="white" onClick={handleVisibility} />
              ) : (
                <box-icon name="show" color="white" onClick={handleVisibility} />
              )}{" "}
            </div>
            <div className="input-div flex row justify-between px-6 my-3">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <p>
                <Link to="">Forgot password?</Link>
              </p>
            </div>
            <div className="register-link-div flex justify-center py-2">
              <p className="text-center text-red-600">{message}</p>
            </div>
            <div className="button-div flex justify-center">
              <button type="submit" className="rounded-3xl p-2 w-[calc(100%-2.5rem)]">
                Login
              </button>
            </div>
            <div className="register-link-div flex justify-center py-3">
              <p>
                Don't have an account?{" "}
                <Link to="/registration" className="font-bold">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
