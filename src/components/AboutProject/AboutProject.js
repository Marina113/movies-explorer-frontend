import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="proekt">
      <div className="about-project__container">
        <h2 className="about-project__title" id="proekt">О проекте</h2>
        <div className="about-project__info">
          <div className="about-project__plan">
            <h3 className="about-project__text">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__dedlayn">
            <h3 className="about-project__text">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__time">
          <div className="about-project__line">
            <h3 className="about-project__weeks about-project__weeks_green">
              1 неделя
            </h3>
            <p className="about-project__weeks-text">Back-end</p>
          </div>
          <div className="about-project__line">
            <h3 className="about-project__weeks about-project__weeks-grey">
              4 недели
            </h3>
            <p className="about-project__weeks-text">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
