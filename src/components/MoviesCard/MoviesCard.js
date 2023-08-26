import React, { useState, useEffect } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, onLikeMovie, onDislikeMovie, savedMovies }) {
  const location = useLocation();
  // const isBtnSave = location === "/movies";
  // const isBtnDelete = location === "/saved-movies";
  const [isLiked, setIsLiked] = useState(false); // стейт лайка
  // const inSavedList = savedMovies?.find((c) => c.movieId === movie.movieId);

  //сохранение фильма

  function handleLikeMovie() {
    if (!isLiked) {
      setIsLiked(true);
      onLikeMovie(movie);
      // console.log(movie);
    }
    if (isLiked) {
      // console.log(savedMovies);
      setIsLiked(false);
      // onDislikeMovie(savedMovies.filter((i) => i.movieId === movie.movieId ));
      onDislikeMovie(movie);
    } else {
      setIsLiked(true);
    }
  }

  //удаление фильма
  function handleDislikeMovie() {
    onDislikeMovie(movie);
    setIsLiked(false);
  }

//   console.log(newMovies);

  useEffect(
    function () {
      const savedList = savedMovies?.map((list) => list.movieId);
      setIsLiked(savedList?.includes(movie.movieId));
    },
    [savedMovies]
  );

  const buttonSaveMovie = `movie__btn-saved  ${
    isLiked && `movie__btn-saved_active`
  }`;
  const buttonDeleteMovie = `movie__btn-delete`;

  function handleTime() {
    let hours = Math.floor(movie.duration / 60);
    let minutes = movie.duration % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    if (hours < 1) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }

  return (
    <>
      <div className="movie">
        <a href={movie.trailerLink} target="blank">
          <img
            src={movie.image}
            alt={movie.nameRU}
            className="movie__picture"
          />
        </a>
        <div className="movie__block">
          <div className="movie__info">
            <h2 className="movie__name">{movie.nameRU}</h2>
            {/* {isBtnSave && ( */}
              <button
                type="button"
                // className={`$(location.pathname === "/saved-movies"
                //     ? "movie__btn-delete"
                //     : "movie__btn-saved")
                // `}

                className={`${
                  location.pathname === "/movies"
                  ? buttonSaveMovie
                  : buttonDeleteMovie
                }`}

                onClick={location.pathname === "/movies" ? handleLikeMovie : handleDislikeMovie}
              />
            {/* )} */}
            {/* {isBtnDelete && (
              <button
                type="button"
                className="movie__btn-delete"
                onClick={handleDislikeMovie}
              />
            )} */}
          </div>
          <p className="movie__duration">{handleTime()}</p>
        </div>
      </div>
    </>
  );
}

export default MoviesCard;
