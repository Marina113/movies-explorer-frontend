import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link, Routes, Route, useLocation } from "react-router-dom";

function Header() {
  // const location = useLocation();
  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo-link">
          <img
            src={logo}
            alt="белый смайл на зеленом фоне"
            className="header__logo"
          />
        </a>
        {/* {location.pathname === "/signin" && ( */}
        <nav className="header__logo-list">
          {/* <Routes>
            <Route
              path="/signup"
              element={ */}
                <Link className="header__title" to="/signup">
                  Регистрация
                </Link>
              {/* } */}
            {/* /> */}

          {/* </div> */}
          {/* )} */}
          {/* {location.pathname === "/signup" && ( */}
          {/* <div> */}

            {/* <Route
              path="/signin"
              element={ */}
                <Link
                  className="header__title header__title_active"
                  to="/signin"
                >
                  Войти
                </Link>
              {/* } 

             />

            </Routes> */}
        </nav>
        
        {/* )} */}
        {/* {location.pathname === "/" && ( */}
        {/* <div className="header__info">
                    <Link
                        className="header__title"
                        to="/signin"
                        onClick={signOut}
                    >
                        Аккаунт
                    </Link>
                </div> */}
        {/* )} */}
      </div>
    </header>
  );
}

export default Header;
