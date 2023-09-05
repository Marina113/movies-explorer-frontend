import React, { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {
  LG_ROW_CARD_COUNT,
  MD_ROW_CARD_COUNT,
  SM_ROW_CARD_COUNT,
  LG_INITIAL_CARD_COUNT,
  MD_INITIAL_CARD_COUNT,
  SM_INITIAL_CARD_COUNT,
  DESKTOP,
  TABLET,
} from "../../utils/constants";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  movies,
  savedMovies,
  onLikeMovie,
  onDislikeMovie,
  initialCardCount,
  setInitialCardCount,
}) {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  const [addCard, setAddCard] = useState(LG_ROW_CARD_COUNT);

  window.addEventListener("resize", function (e) {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 100);
  });

  useEffect(() => {
    if (width >= DESKTOP) {
      setInitialCardCount(LG_INITIAL_CARD_COUNT); // 16
      setAddCard(LG_ROW_CARD_COUNT); // 4
    } else if (width < DESKTOP && width >= TABLET) {
      setInitialCardCount(MD_INITIAL_CARD_COUNT); // 8
      setAddCard(MD_ROW_CARD_COUNT); // 2
    } else if (width < TABLET) {
      setInitialCardCount(SM_INITIAL_CARD_COUNT); // 5
      setAddCard(SM_ROW_CARD_COUNT); // 2
    }
  }, [width]);

  const [visibleMoviesCount, setVisibleMoviesCount] =
    useState(initialCardCount);

  function handleClick() {
    setVisibleMoviesCount(visibleMoviesCount + addCard);
  }

  return (
    <section className="card-list">
      <div className="card-list__container">
        {movies.slice(0, visibleMoviesCount).map((movie) => {
          return (
            <MoviesCard
              key={movie.movieId}
              movie={movie}
              savedMovies={savedMovies}
              onLikeMovie={onLikeMovie}
              onDislikeMovie={onDislikeMovie}
            />
          );
        })}
      </div>
      {movies.length > 15 &&
      location.pathname === "/movies" &&
      movies.length > visibleMoviesCount ? (
        <button className="card-list__more" onClick={handleClick}>
          Ещё
        </button>
      ) : null}
    </section>
  );
}

export default MoviesCardList;
