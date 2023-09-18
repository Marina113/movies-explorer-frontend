import React, { useState, useEffect } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, onLikeMovie, onDislikeMovie, savedMovies }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  function handleLikeMovie() {
    if (!isOnline) {
      return; 
    }

    if (!isLiked) {
      setIsLiked(true);
      onLikeMovie(movie);
    } else {
      setIsLiked(false);
      onDislikeMovie(movie);
    }
  }

  function handleDislikeMovie() {
    if (!isOnline) {
      return;
    }

    onDislikeMovie(movie);
    setIsLiked(false);
  }

  useEffect(
    function () {
      const savedList = savedMovies?.map((list) => list.movieId);
      setIsLiked(savedList?.includes(movie.movieId));
    },
    [movie.movieId, savedMovies]
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
            <button
              type="button"
              className={`${
                location.pathname === "/movies"
                  ? buttonSaveMovie
                  : buttonDeleteMovie
              }`}
              onClick={
                location.pathname === "/movies"
                  ? handleLikeMovie
                  : handleDislikeMovie
              }
              disabled={!isOnline}
            />
          </div>
          <p className="movie__duration">{handleTime()}</p>
        </div>
      </div>
    </>
  );
}

export default MoviesCard;
