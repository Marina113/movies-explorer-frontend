import React, { useState } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const handleOpenMenu = () => {
    setActive(true);
  };
  const handleCloseMenu = () => {
    setActive(false);
  };
  return (
    <div className="navigation">
      <div className="navigation__burger" onClick={handleOpenMenu}>
        <span className="navigation__burger-middle"></span>
      </div>
      <nav className={active ? "navigation__menu_active" : "navigation__menu"}>
        <div className="burger__blur" />
        <button
          className="burger__close"
          type="button"
          onClick={handleCloseMenu}
        />
        <ul className="navigation__list">
          <li className="navigation__links">
            <Link className="navigation__link navigation__link_main" to="/">
              Главная
            </Link>
            <Link
              className={
                location.pathname === "/movies"
                  ? "navigation__link_active"
                  : "navigation__link"
              }
              to="/movies"
            >
              Фильмы
            </Link>
            <Link
              className={
                location.pathname === "/saved-movies"
                  ? "navigation__link_active"
                  : "navigation__link"
              }
              to="/saved-movies"
            >
              Сохранённые фильмы
            </Link>
          </li>
          <li className="navigation__links">
            <Link className="navigation__profile" to="/profile">
              Аккаунт
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
