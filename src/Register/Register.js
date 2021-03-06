import React, { useContext, useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { registerAccount } from "../Services/UserHandler";
import { AuthContext } from "../Context/Context";

function Register() {
  const nav = useNavigate();
  const { loginInfo, handleLoginChange } = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  return (
    <div className="login__background">
      <div className="login__container">
        <h1 className="color__white font__magnolia font__title mb-5 tklab__title">
          TokenLab Calendar
        </h1>
        <div className="login__white-box">
          <div>
            <h1 className="font__artisa title__size">Welcome to tklab</h1>
            <p className="font__desert mb-5 text-lg	">Sign up a new account</p>
          </div>
          {msg.error && (
            <div
              class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <span class="font-medium">Error!</span> {msg.error}
            </div>
          )}

          {msg.sucess && (
            <div
              class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert"
            >
              <span class="font-medium">Success!</span> {msg.sucess}
            </div>
          )}
          <div className="reg__container">
            <div className="login__login-input-field">
              <span className="text__align-left font__pixel">
                Type a username
              </span>
              <input
                name="username"
                onChange={(e) => handleLoginChange(e)}
                className="input__style reg__username"
                required
              />
            </div>
            <div className="login__login-input-field">
              <span className="text__align-left font__pixel">
                Type your email
              </span>
              <input
                name="email"
                className="input__style reg__mail"
                onChange={(e) => handleLoginChange(e)}
                required
              />
            </div>
            <div className="login__login-input-field">
              <span className="text__align-left font__pixel">
                Type a password
              </span>
              <input
                name="password"
                type="password"
                className="input__style reg__password"
                onChange={(e) => handleLoginChange(e)}
                required
              />
            </div>
            <div className="login__login-input-field">
              <span className="text__align-left font__pixel">
                Confirm your password
              </span>
              <input
                onChange={(e) => handleLoginChange(e)}
                name="confirmPassword"
                type="password"
                className="input__style reg__retype"
                required
              />
            </div>
            <button
              type="submit"
              className="background__black color__white button__signup reg__sign-up"
              onClick={() => {
                registerAccount(loginInfo, setMsg);
              }}
            >
              Sign up
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <b onClick={() => nav("/Login")} className="click__pointer">
              Enter now
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
