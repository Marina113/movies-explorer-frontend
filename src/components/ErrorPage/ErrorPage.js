// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  //   const [email, setEmail] = useState("");

  return (
    <section className="error-page">
      <div className="error-page__container">
        <h1 className="error-page__title">404</h1>
        <p className="error-page__paragraph">Страница не найдена</p>
        <Link className="error-page__back" to="">
          Назад
        </Link>
        {/* <p className="error-page__back">Назад</p> */}
      </div>
    </section>
  );
}

export default ErrorPage;
