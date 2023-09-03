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
// import { useResize } from "../../utils/useResize";
// import { useMediaQuery } from "../../utils/useMediaQuery";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  movies,
  savedMovies,
  onLikeMovie,
  onDislikeMovie,
  initialCardCount,
  setInitialCardCount
}) {
  // const [isLoading, setIsLoading] = React.useState(false); //прелоадер
  // const width = useResize();
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);

  // const [initialCardCount, setInitialCardCount] = useState(LG_INITIAL_CARD_COUNT);
  const [addCard, setAddCard] = useState(LG_ROW_CARD_COUNT)

  window.addEventListener("resize", function (e) {
    setTimeout((e) => {
      setWidth(window.innerWidth);
    }, 100);
  });

  function handleClick() {
    setInitialCardCount(initialCardCount + addCard);
  }

  useEffect(() => {
    if(width >= DESKTOP){
      setInitialCardCount(LG_INITIAL_CARD_COUNT);  //16
      setAddCard(LG_ROW_CARD_COUNT);   //4
    } else if(width < DESKTOP && width >= TABLET){
      setInitialCardCount(MD_INITIAL_CARD_COUNT);   //8
      setAddCard(MD_ROW_CARD_COUNT);    //2
    } else if(width < TABLET){
      setInitialCardCount(SM_INITIAL_CARD_COUNT);   //5
      setAddCard(SM_ROW_CARD_COUNT);   //2
    };
    // setInitialCardCount
    },[width]);

  return (
    <section className="card-list">
      <div className="card-list__container">
        {movies.slice(0, initialCardCount).map((movie) => {
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
      {
      movies.length > 15 && 
      location.pathname === "/movies" && 
      movies.length > initialCardCount ? ( 
        <button 
          className="card-list__more" 
          onClick={handleClick}
          // onClick={addMovies}
        > 
          Ещё 
        </button> 
      ) : ( 
        // ""
        setInitialCardCount()
      )}
    </section>
  );
}

export default MoviesCardList;
