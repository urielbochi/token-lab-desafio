import React, { useContext, useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { registerAccount } from "../Services/fetchAPI";
import { MyContext } from "../Context/Context";

function Register() {
  const nav = useNavigate();
  const { loginInfo, handleLoginChange } = useContext(MyContext);

  return (
    <div className="login__background login__container">
      <h1 className="color__white font__pixel font__title">
        TokenLab Calendar
      </h1>
      <div className="login__white-box">
        <div>
          <h1 className="font__artisa title__size">Welcome to tklab</h1>
          <p className="font__desert mb-5 text-lg	">Sign up a new account</p>
        </div>
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
              type="password"
              className="input__style reg__retype"
              required
            />
          </div>
          <button
            type="submit"
            className="background__black color__white button__signup reg__sign-up"
            onClick={() => registerAccount(loginInfo)}
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
  );
}

export default Register;
