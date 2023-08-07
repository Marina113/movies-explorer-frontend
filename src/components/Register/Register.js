import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="register">
      <div className="register__container">
        <Link to="/" className="register__logo-link">
          <img
            src={logo}
            alt="белый смайл на зеленом фоне"
            className="register__logo"
          />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <label for="name-input" className="register__label">
            Имя
          </label>
          <input
            id="name-input"
            type="text"
            className="register__input"
            placeholder="Имя"
            // value={name || ""}
            minLength="2"
            maxLength="20"
            autoComplete="off"
            required
          />
          <span className="register__error"></span>
          <label for="email-input" className="register__label">
            Email
          </label>
          <input
            id="email-input"
            type="email"
            className="register__input"
            placeholder="Email"
            // value={email || ""}
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          <span className="register__error"></span>
          <label for="password-input" className="register__label">
            Пароль
          </label>
          <input
            id="password-input"
            type="password"
            className="register__input"
            placeholder="Пароль"
            // value={password || ""}
            minLength="2"
            maxLength="12"
            autoComplete="off"
            required
          />
          <span className="register__error">Что-то пошло не так...</span>
          <button type="submit" className="register__button">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__signin">
          <p>
            Уже зарегистрированы?{" "}
            <Link to="/signin" className="register__login-link">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;
