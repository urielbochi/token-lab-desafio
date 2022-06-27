import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();

  return (
    <div className="login__background login__container">
      <h1 className="color__white font__pixel font__title">TokenLab Calendar</h1>
      <div className="login__white-box">
        <div>
          <h1 className="font__artisa title__size">Welcome to tklab</h1>
          <p className="font__desert mb-5 text-lg	">Sign up a new account</p>
        </div>
        <form className="reg__container">
          <div className="login__login-input-field">
            <span className="text__align-left font__pixel">
              Type a username
            </span>
            <input
              className="input__style reg__username"
              required
            />
          </div>
          <div className="login__login-input-field">
            <span className="text__align-left font__pixel">
              Type your email
            </span>
            <input className="input__style reg__mail" required />
          </div>
          <div className="login__login-input-field">
            <span className="text__align-left font__pixel">
              Type a password
            </span>
            <input
              type="password"
              className="input__style reg__password"
              required
            />
          </div>
          <div className="login__login-input-field">
            <span className="text__align-left font__pixel">
              Confirm your password
            </span>
            <input
              type="password"
              className="input__style reg__retype"
              required
            />
          </div>
          <button
            type="submit"
            className="background__black color__white button__signup reg__sign-up"
          >
            Sign up
          </button>
        </form>
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
