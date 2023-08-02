import React from "react";
import "./Portfolio.css";
import { Link, useLocation } from "react-router-dom";
import strelka from "../../images/strelkaPortfolio.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__sayt">
            <Link
              className="portfolio__link"
              to="//github.com/Marina113/how-to-learn"
            >
              <p className="portfolio__text">Статичный сайт</p>
              <img
                className="portfolio__ssylka"
                src={strelka}
                alt="диагональная стрелка-ссылка"
              ></img>
            </Link>
          </li>
          <li className="portfolio__sayt">
            <Link
              className="portfolio__link"
              to={"//github.com/Marina113/russian-travel"}
            >
              <p className="portfolio__text">Адаптивный сайт</p>
              <img
                className="portfolio__ssylka"
                src={strelka}
                alt="диагональная стрелка-ссылка"
              ></img>
            </Link>
          </li>
          <li className="portfolio__sayt">
            <Link
              className="portfolio__link"
              to={"//github.com/Marina113/react-mesto-api-full-gha"}
            >
              <p className="portfolio__text">Одностраничное приложение</p>
              <img
                className="portfolio__ssylka"
                src={strelka}
                alt="диагональная стрелка-ссылка"
              ></img>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
