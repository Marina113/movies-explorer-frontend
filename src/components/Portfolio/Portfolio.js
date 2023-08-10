import React from "react";
import "./Portfolio.css";
import strelka from "../../images/strelkaPortfolio.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__sayt">
            <a
              href="https://github.com/Marina113/how-to-learn"
              className="portfolio__link"
              title="how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__text">Статичный сайт</p>
              <img
                className="portfolio__ssylka"
                src={strelka}
                alt="диагональная стрелка-ссылка"
              ></img>
            </a>
          </li>
          <li className="portfolio__sayt">
            <a
              href="https://github.com/Marina113/russian-travel"
              className="portfolio__link"
              title="russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__text">Адаптивный сайт</p>
              <img
                className="portfolio__ssylka"
                src={strelka}
                alt="диагональная стрелка-ссылка"
              ></img>
            </a>
          </li>
          <li className="portfolio__sayt">
            <a
              href="https://github.com/Marina113/react-mesto-api-full-gha"
              className="portfolio__link"
              title="react-mesto-api-full-gha"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__text">Одностраничное приложение</p>
              <img
                className="portfolio__ssylka"
                src={strelka}
                alt="диагональная стрелка-ссылка"
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
