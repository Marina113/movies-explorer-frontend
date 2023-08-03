import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "./MoviesCard.css";
import pictures1 from "../../images/pictures1.jpg";
import pictures2 from "../../images/pictures2.jpg";
import { useLocation } from "react-router-dom";

function MoviesCard() {
  // const currentUser = React.useContext(CurrentUserContext);
const location = useLocation();
  return (
    <>
    <div className="movie">
      <img src={pictures1} alt="старое фото авто и детей" className="movie__picture" />
      <div className="movie__block">
        <div className="movie__info">
          <h2 className="movie__name">33 слова о дизайне</h2>
          <button type="button" className={location.pathname === "/movies"
                    ? "movie__saved movie__saved_active"
                    : "movie__saved movie__saved_delete"}   />
        </div>
        <p className="movie__duration">1ч42мин</p>
      </div>
    </div>
    <div className="movie">
    <img src={pictures2} alt="старое фото авто и детей" className="movie__picture" />
    <div className="movie__block">
      <div className="movie__info">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <button type="button" className={location.pathname === "/movies"
                    ? "movie__saved movie__saved_active"
                    : "movie__saved movie__saved_delete"}   />
      </div>
      <p className="movie__duration">1ч42мин</p>
    </div>
  </div>
  </>
  );
}

export default MoviesCard;
