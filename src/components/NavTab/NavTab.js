import React from "react";
import "./NavTab.css";
import { Link, useLocation } from "react-router-dom";

function NavTab() {
  return (
    <section className="navtab">
        <div className="navtab__list">
        <Link className="navtab__text" to="#proekt">
          О проекте
        </Link>
        <Link className="navtab__text" to="">
          Технологии
        </Link>
        <Link className="navtab__text" to="">
          Студент
        </Link>
        </div>

    </section>
  );
}

export default NavTab;
