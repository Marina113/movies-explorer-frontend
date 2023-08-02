import React from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
    // const location = useLocation();
  return (
    <nav className="navigation">
      <div className="navigation__main">
      {/* {location.pathname === "/movies" && ( */}
        <Link className="navigation__movies" to="/movies">
          Фильмы
        </Link>
      {/* )} */}
        <Link className="navigation__saved-movies" to="/saved-movies">
          Сохранённые фильмы
        </Link>
      </div>
      <Link className="navigation__profile" to="/profile">
        Аккаунт
      </Link>
    </nav>
  );
}

export default Navigation;
