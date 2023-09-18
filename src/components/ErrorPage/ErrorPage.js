// import { useState } from "react";
import "./ErrorPage.css";
import { Link, useNavigate } from "react-router-dom";

function ErrorPage() {
  //   const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function goBack() {
    navigate(-2, { replace: true });
  }
console.log(goBack)
  return (
    <main className="error-page">
      <div className="error-page__container">
        <h1 className="error-page__title">404</h1>
        <p className="error-page__paragraph">Страница не найдена</p>
        <Link className="error-page__back" to="" onClick={goBack}>
          Назад
        </Link>
      </div>
    </main>
  );
}

export default ErrorPage;
