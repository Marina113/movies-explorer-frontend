import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/FormAndValid";

function Profile({ onSignOut, onUpdateProfile, error }) {
  // const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm, setIsValid } = useFormWithValidation();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if(currentUser){
      resetForm({name: currentUser.name || "", email: currentUser.email || ""});
    }

  },[currentUser, resetForm])
  
  // React.useEffect(() => {
  //   if (currentUser.name === values.name && currentUser.email === values.email) {
  //     setIsValid(false);
  //   }
  // }, [setIsValid, values, currentUser]);

  useEffect(() => {
    if ((values.name !== currentUser.name || values.email !== currentUser.email)) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
}, [currentUser, values]);

  //обработчик отправки формы
  function handleProfileSubmit(e) {
    e.preventDefault();
    if(isValid){
      onUpdateProfile({name: values.name, email: values.email});
    }
    setIsDisabled(false);
  }

  //разблокировка полей ввода
  function handleEditButton() {
    setIsDisabled(true);
  }

  return (
    <>
      <Header />
      <main className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form
            className="profile__form"
            onSubmit={handleProfileSubmit}
            // isDisabled={!isDisabled}
          >
            <div className="profile__name">
              <label htmlFor="name-input" className="profile__label">
                Имя
              </label>
              <input
                id="name-input"
                type="text"
                name="name"
                className="profile__input"
                placeholder={currentUser.name}
                value={values.name || ''}
                onChange={handleChange}
                minLength="2"
                maxLength="30"
                autoComplete="off"
                // pattern=""
                // disabled={!isDisabled}
                required
                readOnly={!isDisabled}
              />
            </div>
            <span
              className={`profile__error ${
                !isValid ? "profile__error_active-up" : ""
              }`}
            >
              {errors.name || ""}
            </span>
            <div className="profile__email">
              <label htmlFor="email-input" className="profile__label">
                Email
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                className="profile__input"
                placeholder={currentUser.email}
                value={values.email || ''}
                onChange={handleChange}
                minLength="2"
                maxLength="40"
                autoComplete="off"
                // pattern=""
                // disabled={!isDisabled}
                required
                readOnly={!isDisabled}
              />
            </div>
            <span
              className={`profile__error ${
                !isValid ? "profile__error_active-down" : ""
              }`}
            >
              {errors.email || ""}
            </span>
            <p className="profile__error-form">{error}</p>
            <div className="profile__edit">
              {!isDisabled ? (
                <>
                  <button
                    type="button"
                    className="profile__redactor"
                    onClick={handleEditButton}
                  >
                    Редактировать
                  </button>
                  <Link className="profile__out" to="" onClick={onSignOut}>
                    Выйти из аккаунта
                  </Link>
                </>
              ) : (
                <>
                {/* <p className="profile__error-form">{error}</p> */}
                  <button
                    type="submit"
                    className="profile__save"
                    disabled={!isValid || (currentUser.name === values.name && currentUser.email === values.email)}
                    onClick={handleProfileSubmit}
                  >
                    Сохранить
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
