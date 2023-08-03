import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login__logo-link">
          <img
            src={logo}
            alt="белый смайл на зеленом фоне"
            className="login__logo"
          />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <label for="email-input" className="login__label">
            Email
          </label>
          <input
            id="login-input"
            type="email"
            className="login__input"
            value={email}
            placeholder="Email"
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          <label for="password-input" className="login__label">
            Пароль
          </label>
          <input
            id="password-input"
            type="password"
            className="login__input"
            placeholder="Пароль"
            value={password}
            minLength="2"
            maxLength="12"
            autoComplete="off"
            required
          />
          <button type="submit" className="login__button">
            Войти
          </button>
        </form>
        <div className="login__signup">
          <p className="login__question">
            Ещё не зарегистрированы?{" "}
            <Link to="/signup" className="login__login-link">
              Регистрация
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
