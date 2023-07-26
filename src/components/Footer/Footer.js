import React from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__ssylka">
          <p className="footer__time">&copy; 2020</p>
          <div className="footer__yandex">
            <Link className="footer__text" to="">
              Яндекс.Практикум
            </Link>
            <Link className="footer__text" to="">
              Github
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
