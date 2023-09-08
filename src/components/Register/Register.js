import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";
import { useFormWithValidation } from "../../utils/FormAndValid";

function Register({ handleRegister, isLoading, error }) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values.name, values.email, values.password);
    resetForm();
  };

  //валидация формы
  useEffect(() => {
    if (!values.name || !values.email || !values.password) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [values.name, values.email, values.password]);

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
        <form
          className="register__form"
          onSubmit={handleSubmit}
          disabled={isDisabled}
        >
          <label htmlFor="name-input" className="register__label">
            Имя
          </label>
          <input
            id="name-input"
            type="text"
            name="name"
            className="register__input"
            onChange={handleChange}
            placeholder="Имя"
            value={values.name}
            minLength="2"
            maxLength="30"
            // pattern="^[A-Za-zА-Яа-яЁё \\-]+$"
            autoComplete="off"
            required
          />
          {/* <span className="register__error">{errors.name || ""}</span> */}
          <span
            className={`register__error ${
              !isValid ? "register__error_active" : ""
            }`}
          >
            {errors.name || ""}
          </span>
          <label htmlFor="email-input" className="register__label">
            Email
          </label>
          <input
            id="email-input"
            type="email"
            name="email"
            className="register__input"
            onChange={handleChange}
            placeholder="Email"
            value={values.email}
            pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,}$"
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          <span
            className={`register__error ${
              !isValid ? "register__error_active" : ""
            }`}
          >
            {errors.email || ""}
          </span>
          <label htmlFor="password-input" className="register__label">
            Пароль
          </label>
          <input
            id="password-input"
            type="password"
            name="password"
            className="register__input"
            onChange={handleChange}
            placeholder="Пароль"
            value={values.password}
            minLength="4"
            maxLength="12"
            autoComplete="off"
            required
          />
          <span
            className={`register__error ${
              !isValid ? "register__error_active" : ""
            }`}
          >
            {errors.password || ""}
          </span>
          <p className="register__error-form">{error}</p>
          <button
            type="submit"
            className="register__button"
            disabled={!isValid}
          >
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
