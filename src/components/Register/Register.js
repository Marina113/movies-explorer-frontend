// import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <div className="header__container">
        <a href="#" className="header__logo-link">
          <img
            src={logo}
            alt="белый смайл на зеленом фоне"
            className="header__logo"
          />
        </a>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <input
            id="name-input"
            type="text"
            className="register__input"
            placeholder="Имя"
            minLength="2"
            maxLength="20"
            autoComplete="off"
            required
          />
          <input
            id="email-input"
            type="email"
            className="register__input"
            placeholder="Email"
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          <input
            id="password-input"
            type="password"
            className="register__input"
            placeholder="Пароль"
            minLength="2"
            maxLength="12"
            autoComplete="off"
            required
          />
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
    </section>
  );
}

export default Register;
