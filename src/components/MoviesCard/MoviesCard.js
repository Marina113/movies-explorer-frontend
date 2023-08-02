import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "./MoviesCard.css";
import pictures1 from "../../images/pictures1.jpg";
import pictures2 from "../../images/pictures2.jpg";

function MoviesCard() {
  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
    <div className="movies-item">
      <img src={pictures1} alt="старое фото авто и детей" className="movies-item__picture" />
      <div className="movies-item__block">
        <div className="movies-item__info">
          <h2 className="movies-item__name">33 слова о дизайне</h2>
          <button type="button" className="movies-item__saved movies-item__saved_active movies-item__saved_delete"></button>
        </div>
        <p className="movies-item__duration">1ч42мин</p>
      </div>
    </div>
    <div className="movies-item-item">
    <img src={pictures2} alt="старое фото авто и детей" className="movies-item__picture" />
    <div className="movies-item__block">
      <div className="movies-item__info">
        <h2 className="movies-item__name">33 слова о дизайне</h2>
        <button type="button" className="movies-item__saved movies-item__saved_active movies-item__saved_delete"></button>
      </div>
      <p className="movies-item__duration">1ч42мин</p>
    </div>
  </div>
  </>
  );
}

export default MoviesCard;
