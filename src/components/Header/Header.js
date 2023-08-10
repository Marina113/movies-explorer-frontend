import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
  const location = useLocation();
  return (
    <header
      className="header header_theme-light"
      style={{
        background: useLocation().pathname !== "/" ? "#FFF" : "#465dff",
      }}
    >
      <div className="header__container">
        <div className="header__body">
          <Link to="/" className="header__logo-link">
            <img
              src={logo}
              alt="белый смайл на зеленом фоне"
              className="header__logo"
            />
          </Link>
          {location.pathname === "/" && (
            <nav className="header__logo-list">
              <Link className="header__title" to="/signup">
                Регистрация
              </Link>
              <Link className="header__title header__title_active" to="/signin">
                Войти
              </Link>
            </nav>
          )}
          {location.pathname === "/movies" && <Navigation />}
          {location.pathname === "/saved-movies" && <Navigation />}
          {location.pathname === "/profile" && <Navigation />}
        </div>
      </div>
    </header>
  );
}

export default Header;
