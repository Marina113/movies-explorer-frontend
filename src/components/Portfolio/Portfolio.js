import React from "react";
import "./Portfolio.css";
import { Link, useLocation } from "react-router-dom";
import strelka from "../../images/strelkaPortfolio.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__list">
          <div className="portfolio__sayt">
            <Link className="portfolio__text" to="">
              Статичный сайт
            </Link>
            <img
              className="portfolio__ssylka"
              src={strelka}
              alt="диагональная стрелка-ссылка"
            ></img>
          </div>
          <div className="portfolio__sayt">
            <Link className="portfolio__text" to="https://marina113.github.io/russian-travel/#">
              Адаптивный сайт
            </Link>
            <img
              className="portfolio__ssylka"
              src={strelka}
              alt="диагональная стрелка-ссылка"
            ></img>
          </div>
          <div className="portfolio__sayt">
            <Link className="portfolio__text" to="">
              Одностраничное приложение
            </Link>
            <img
              className="portfolio__ssylka"
              src={strelka}
              alt="диагональная стрелка-ссылка"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
