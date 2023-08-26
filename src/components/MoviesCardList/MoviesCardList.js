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
} from "../../utils/constants";
// import { useResize } from "../../utils/useResize";
import { useMediaQuery } from "../../utils/useMediaQuery";

function MoviesCardList({
  movies,
  savedMovies,
  onLikeMovie,
  onDislikeMovie,
  moreButton,
}) {
  // const [isLoading, setIsLoading] = React.useState(false); //прелоадер
  // const width = useResize();

  const [cards, setCards] = React.useState(null);
  const [showAllMovies, setShowAllMovies] = React.useState([]);

  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isTablet = useMediaQuery("(min-width: 480px)");

  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isTablet
    ? MD_ROW_CARD_COUNT
    : SM_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isTablet
    ? MD_INITIAL_CARD_COUNT
    : SM_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] = React.useState(
    initialCardCount
  );

  // const roundedVisibleCardCount = isDesktop
  //   ? Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount
  //   : isTablet
  //   ? Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount
  //   : Math.floor((visibleCardCount / cardColumnCount) * cardColumnCount)

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((card) => setCards(card));
  }, []);

  const handleClick = () => {
    calculateCardCount();
  };

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
    }

    setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT);
  };

  // console.log(movies);

  return (
    <section className="card-list">
      <div className="card-list__container">
        {movies.slice(0, visibleCardCount).map((movie) => {
          return (
            <MoviesCard
              key={movie.movieId}
              movie={movie}
              savedMovies={savedMovies}
              onLikeMovie={onLikeMovie}
              onDislikeMovie={onDislikeMovie}
            />
          );
        })
        }
      </div>
      <button
        type="button"
        className={
          moreButton
            ? `card-list__more`
            : `card-list__more card-list__more_hidden`
        }
        onClick={handleClick}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
