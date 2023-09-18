import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";
import { useFormWithValidation } from "../../utils/FormAndValid";

function Login({ handleLogin, isLoading, error }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values.email, values.password);
    resetForm();
  };

  //валидация формы
  useEffect(() => {
    if (!values.email || !values.password) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, []);

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
        <form
          className="login__form"
          onSubmit={handleSubmit}
          disabled={isDisabled}
        >
          <label htmlFor="email-input" className="login__label">
            Email
          </label>
          <input
            id="login-input"
            type="email"
            className="login__input"
            name="email"
            value={values.email || ''}
            placeholder="Email"
            onChange={handleChange}
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          <span
            className={`login__error ${!isValid ? "login__error_active" : ""}`}
          >
            {errors.email || ""}
          </span>
          <label htmlFor="password-input" className="login__label">
            Пароль
          </label>
          <input
            id="password-input"
            type="password"
            name="password"
            className="login__input"
            onChange={handleChange}
            placeholder="Пароль"
            value={values.password || ''}
            minLength="4"
            maxLength="12"
            autoComplete="off"
            required
          />
          <span
            className={`login__error ${!isValid ? "login__error_active" : ""}`}
          >
            {errors.password || ""}
          </span>
          <p className="login__error-form">{error}</p>
          <button type="submit" className="login__button" disabled={!isValid}>
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
