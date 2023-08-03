import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  return (
    <section className="profile">
      <Header />
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
              // value={name || ""}
              minLength="2"
              maxLength="20"
              autoComplete="off"
              required
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
              // value={email || ""}
              minLength="2"
              maxLength="40"
              autoComplete="off"
              required
            />
          </div>
          <div className="profile__edit">
            <button type="submit" className="profile__redactor">
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
    </section>
  );
}

export default Profile;
