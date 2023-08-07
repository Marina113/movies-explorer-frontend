import React from "react";
import "./Burger.css";
import { Link } from "react-router-dom";

function Burger() {
  return (
    <section className="burger">
      <div className="burger__container">
        <div className="burger__button">
          <span className="burger__middle" />
        </div>
        <nav className="burger__menu">
          <ul className="burger__list">
            <Link className="burger__link" to="/">
              Главная
            </Link>
            <Link className="burger__link" to="/movies">
              Фильмы
            </Link>
            <Link className="burger__link" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </ul>
          <Link className="burger__link burger__link_akkaunt" to="/profile">
            Аккаунт
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default Burger;
