import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";
import {useFormWithValidation} from "../../utils/FormAndValid";

function Register({ handleRegister, isLoading }) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  // function handleChangeName(evt) {
  //   setName(evt.target.value);
  // }

  // function handleChangeEmail(evt) {
  //   setEmail(evt.target.value);
  // }

  // function handleChangePassword(evt) {
  //   setPassword(evt.target.value);
  // }

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    handleRegister(values.name, values.email, values.password);
  };

  // const [isDisabled, setIsDisabled] = useState(true);

  // useEffect(() => {
  //   if (!values.name || !values.email || !values.password) {
  //     setIsDisabled(true);
  //   } else {
  //     setIsDisabled(false);
  //   }
  // }, [!values.name || !values.email || !values.password]);

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
        <form className="register__form" onSubmit={handleRegisterSubmit}>
          <label htmlFor="name-input" className="register__label">
            Имя
          </label>
          <input
            id="name-input"
            type="text"
            className="register__input"
            onChange={handleChange}
            placeholder="Имя"
            value={values.name}
            minLength="2"
            maxLength="30"
            autoComplete="off"
            required
          />
          <span className="register__error">{errors.name || ''}</span>
          <label htmlFor="email-input" className="register__label">
            Email
          </label>
          <input
            id="email-input"
            type="email"
            className="register__input"
            onChange={handleChange}
            placeholder="Email"
            value={values.email}
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          <span className="register__error">{errors.email || ''}</span>
          <label htmlFor="password-input" className="register__label">
            Пароль
          </label>
          <input
            id="password-input"
            type="password"
            className="register__input"
            onChange={handleChange}
            placeholder="Пароль"
            value={values.password}
            minLength="2"
            maxLength="12"
            autoComplete="off"
            required
          />
          <span className="register__error">{errors.password || ''}</span>
          <button
            type="submit"
            className="register__button"
            // disabled={isLoading}
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
