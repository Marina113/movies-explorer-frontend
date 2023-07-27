import React from "react";
import "./AboutMe.css";
import student from "../../images/student.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info">
        <div div className="about-me__text">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__paragraph">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-&nbsp;разработке, начал
            заниматься фриланс-&nbsp;заказами и ушёл с постоянной работы.
          </p>
          <p className="about-me__address">Github</p>
        </div>
        <img className="about-me__photo" src={student} alt="фото парня"></img>
      </div>
      </div>
    </section>
  );
}

export default AboutMe;
