import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      <div className="navtab__container">
      <ul className="navtab__list">
        <li className="navtab__list-item">
          <a href="#proekt" className="navtab__text">
            О проекте
          </a>
        </li>
        <li className="navtab__list-item">
          <a href="#technology" className="navtab__text">
            Технологии
          </a>
        </li>
        <li className="navtab__list-item">
          <a href="#student" className="navtab__text">
            Студент
          </a>
        </li>
      </ul>
      </div>
      
    </nav>
  );
}

export default NavTab;
