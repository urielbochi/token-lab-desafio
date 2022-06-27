import React, { useContext } from "react";
import "./Login.css";
import Facebook from "../Images/Facebook.png";
import Google from "../Images/Google.png";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/Context";

function Login() {
  const nav = useNavigate();
  const { loginInfo, handleLoginChange } = useContext(MyContext);

  return (
    <div className="login__background login__container">
      <h1 className="color__white font__magnolia font__title mb-5">
        TokenLab Calendar
      </h1>
      <div className="login__white-box">
        <div>
          <h1 className="font__artisa title__size">Welcome back!</h1>
          <p className="font__subtitle  font__desert login__subtitle">
            Sign in to your account
          </p>
        </div>
        <div className="login__login-input-field">
          <span className="text__align-left font__artisa">Email</span>
          <input
            name="email"
            className="input__style"
            onChange={(e) => handleLoginChange(e)}
            required
          />
        </div>
        <div className="login__login-input-field">
          <span className="text__align-left font__artisa">Password</span>
          <input
            name="password"
            type="password"
            className="input__style mrg__bottom"
            onChange={(e) => handleLoginChange(e)}
            required
          />
        </div>
        <p className="font-black font__artisa">Or</p>
        <div className="flex__row icons-gap">
          <img
            alt="Icone com fundo branco do Google. É um G pintado de quatro cores distintas, vermelho, amarelo, verde e azul."
            className="login__icons"
            src={Google}
          />
          <img
            alt="Icone do Facebook em fundo azul. Letra f de cor branca em um fundo azul claro."
            className="login__icons"
            src={Facebook}
          />
        </div>
        <button className="color__white button__signup font__magnolia">
          Sign in
        </button>
        <p className="font__desert" onClick={() => nav("/forgot-password")}>
          Forgot password?
        </p>
        <p className="font__desert">
          Don't have an account?{" "}
          <b className="click__pointer" onClick={() => nav("/Register")}>
            Register now
          </b>
        </p>
      </div>
    </div>
  );
}

export default Login;
