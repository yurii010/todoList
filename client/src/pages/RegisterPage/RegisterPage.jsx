import useRegisterPageActions from "../../hooks/useRegisterPageActions";
import PasswordChecklist from "react-password-checklist";
import { Link } from "react-router-dom";
import "./RegisterPage.scss";

const RegisterPage = () => {
  const { message, messageColor, passwords, isLoading, showPass, inputRef, info, badPass, handleChange, handleVisibility, handleSubmit, handleFill } =
    useRegisterPageActions();

  return (
    <div className="auth-page-div w-full h-full fixed">
      <div className="container m-auto h-full flex justify-center items-center">
        <div className="form-div w-96 text-white">
          <form onSubmit={handleSubmit} className="select-none">
            <h1 className="text-center py-3 text-3xl">Sign Up</h1>
            <p className="py-1 px-5">Write your e-mail</p>
            <div className="input-div relative mb-3">
              <input
                type="text"
                name="email"
                value={info.email}
                onChange={handleFill}
                placeholder="E-mail"
                className="w-[calc(100%-2.5rem)] h-10 mx-5 px-3 pr-9 rounded-3xl bg-transparent border border-[rgba(118,160,218)]"
                required
              />
              <box-icon name="envelope" color="white" />
            </div>
            <p className="py-1 px-5">Write your username</p>

            <div className="input-div relative mb-3">
              <input
                type="text"
                name="username"
                value={info.username}
                onChange={handleFill}
                placeholder="Username"
                className="w-[calc(100%-2.5rem)] h-10 mx-5 px-3 pr-9 rounded-3xl bg-transparent border border-[rgba(118,160,218)]"
                required
              />
              <box-icon name="user" color="white" />
            </div>
            <p className="py-1 px-5">Write your password</p>
            <div className="input-div relative mb-3">
              <input
                type="password"
                name="onePass"
                value={passwords.onePass}
                onChange={handleChange}
                placeholder="Password"
                className="w-[calc(100%-2.5rem)] h-10 mx-5 px-3 pr-9 rounded-3xl bg-transparent border border-[rgba(118,160,218)]"
                ref={inputRef}
                required
              />
              {showPass ? (
                <box-icon name="hide" color="white" onClick={handleVisibility} />
              ) : (
                <box-icon name="show" color="white" onClick={handleVisibility} />
              )}
            </div>
            <p className="py-1 px-5">Verify your password</p>
            <div className="input-div relative mb-3">
              <input
                type="password"
                name="twoPass"
                value={passwords.twoPass}
                onChange={handleChange}
                placeholder="Password"
                className={`w-[calc(100%-2.5rem)] h-10 mx-5 px-3 pr-9 rounded-3xl bg-transparent border ${
                  badPass ? "border-red-500" : "border-[rgba(118,160,218)]"
                }`}
                required
              />
              <box-icon name="lock-alt" color="white" />
            </div>
            <div className="button-div flex justify-center">
              <button type="submit" className="rounded-3xl p-2 w-[calc(100%-2.5rem)]">
                Sign Up
              </button>
            </div>
            <div className="register-link-div flex justify-center pt-2">
              <PasswordChecklist
                rules={["minLength", "specialChar", "number", "capital", "match"]}
                minLength={8}
                value={passwords.onePass}
                valueAgain={passwords.twoPass}
                messages={{
                  minLength: "The password is more than 8 characters long.",
                  specialChar: "The password has special characters.",
                  number: "The password has a number.",
                  capital: "The password has an uppercase letter.",
                  match: "The passwords match.",
                }}
              />
            </div>
            <div className={`register-link-div flex justify-center ${isLoading || message ? "py-2" : ""}`}>
              {isLoading ? (
                <div className="loader flex justify-center"></div>
              ) : (
                <p className={`text-center ${messageColor ? `text-green-500` : `text-red-600`} `}>{message}</p>
              )}
            </div>
            <div className="register-link-div flex justify-center pb-3 pt-1">
              <p>
                Already have an account?{" "}
                <Link to="/authorization" className="font-bold">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
