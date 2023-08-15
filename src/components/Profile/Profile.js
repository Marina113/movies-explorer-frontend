import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onUpdateUser }) {
  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleProfileSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: name, email: email });
  }

  return (
    <>
      <Header />
      <main className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <div className="profile__name">
              <label for="name-input" className="profile__label">
                Имя
              </label>
              <input
                id="name-input"
                type="text"
                className="profile__input"
                placeholder="Виталий"
                value={name}
                onChange={handleChangeName}
                minLength="2"
                maxLength="20"
                autoComplete="off"
                required
                disabled
              />
            </div>
            <div className="profile__email">
              <label for="email-input" className="profile__label">
                Email
              </label>
              <input
                id="email-input"
                type="email"
                className="profile__input"
                placeholder="pochta@yandex.ru"
                value={email}
                onChange={handleChangeEmail}
                minLength="2"
                maxLength="40"
                autoComplete="off"
                required
                disabled
              />
            </div>
            <div className="profile__edit">
              <button
                type="submit"
                className="profile__redactor"
                onChange={handleProfileSubmit}
              >
                Редактировать
              </button>
              <Link
                className="profile__out"
                to=""
                onClick={() => {
                  navigate(-1);
                }}
              >
                Выйти из аккаунта
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
