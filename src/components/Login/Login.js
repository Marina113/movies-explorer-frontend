import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login({handleLogin, isLoading}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value); 
  }

  function handleLoginSubmit(e) {
      e.preventDefault();
      handleLogin(email, password);
}

  return (
    <main className="login">
      <div className="login__container">
        <Link to="/" className="login__logo-link">
          <img
            src={logo}
            alt="белый смайл на зеленом фоне"
            className="login__logo"
          />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleLoginSubmit}>
          <label htmlFor="email-input" className="login__label">
            Email
          </label>
          <input
            id="login-input"
            type="email"
            className="login__input"
            value={email}
            placeholder="Email"
            onChange={handleChangeEmail}
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          <label htmlFor="password-input" className="login__label">
            Пароль
          </label>
          <input
            id="password-input"
            type="password"
            className="login__input"
            onChange={handleChangePassword}
            placeholder="Пароль"
            value={password}
            minLength="2"
            maxLength="12"
            autoComplete="off"
            required
          />
          <button type="submit" className="login__button"  disabled={isLoading}>
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
    </main>
  );
}

export default Login;
