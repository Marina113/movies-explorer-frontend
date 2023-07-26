import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="technology">
      <div className="technology__container">
        <h2 className="technology__title">Технологии</h2>
        <div className="technology__info">
          <h3 className="technology__text">7 технологий</h3>
          <p className="technology__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <div class="technology__list">
          <p class="technology__elements">HTML</p>
          <p class="technology__elements">CSS</p>
          <p class="technology__elements">JS</p>
          <p class="technology__elements">React</p>
          <p class="technology__elements">Git</p>
          <p class="technology__elements">Express.js</p>
          <p class="technology__elements">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
