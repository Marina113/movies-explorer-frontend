import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="technology" id="technology">
      <div className="technology__container">
        <h2 className="technology__title">Технологии</h2>
        <div className="technology__info">
          <h3 className="technology__text">7 технологий</h3>
          <p className="technology__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <div className="technology__list">
          <p className="technology__elements">HTML</p>
          <p className="technology__elements">CSS</p>
          <p className="technology__elements">JS</p>
          <p className="technology__elements">React</p>
          <p className="technology__elements">Git</p>
          <p className="technology__elements">Express.js</p>
          <p className="technology__elements">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
