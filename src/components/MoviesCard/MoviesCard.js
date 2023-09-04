import React, { useState, useEffect } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, onLikeMovie, onDislikeMovie, savedMovies }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false); // стейт лайка

  //сохранение фильма

  function handleLikeMovie() {
    if (!isLiked) {
      setIsLiked(true);
      onLikeMovie(movie);
    }
    if (isLiked) {
      setIsLiked(false);
      onDislikeMovie(movie);
    } else {
      setIsLiked(true);
    }
  }

  // const handleLikeMovie = async () => {
  //   if (!isLiked) {
  //     try {
  //       setIsLiked(true);
  //       await onLikeMovie(movie);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     finally{setIsLiked(false);
  //       onDislikeMovie(movie)}
  //   }
  // };

  //удаление фильма
  function handleDislikeMovie() {
    onDislikeMovie(movie);
    setIsLiked(false);
  }

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
              className={`${
                location.pathname === "/movies"
                  ? buttonSaveMovie
                  : buttonDeleteMovie
              }`}
              onClick={
                location.pathname === "/movies" 
                // {handleLikeMovie}
                  ? handleLikeMovie
                  : handleDislikeMovie
              }
            />
          </div>
          <p className="movie__duration">{handleTime()}</p>
        </div>
      </div>
    </>
  );
}

export default MoviesCard;


// import React, { useState, useEffect } from "react";
// import "./MoviesCard.css";
// import { useLocation } from "react-router-dom";

// function MoviesCard({ movie, onLikeMovie, onDislikeMovie, savedMovies }) {
//   const location = useLocation();
//   const [isLiked, setIsLiked] = useState(false);

//   const handleLikeMovie = async () => {
//     if (!isLiked) {
//       try {
//         setIsLiked(true);
//         await onLikeMovie(movie);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLiked(false);
//         // onDislikeMovie(movie);
//       }
//     }
//   };

//   //  удаление фильма
//   function handleDislikeMovie() {
//     onDislikeMovie(movie);
//     setIsLiked(false);
//   }

//   useEffect(() => {
//     const savedList = savedMovies?.map((list) => list.movieId);
//     setIsLiked(savedList?.includes(movie.movieId));
//   }, [savedMovies, movie.movieId]);

//   const buttonSaveMovie = `movie__btn-saved  ${
//     isLiked ? "movie__btn-saved_active" : ""
//   }`;
//   const buttonDeleteMovie = "movie__btn-delete";

//   function handleTime() {
//     let hours = Math.floor(movie.duration / 60);
//     let minutes = movie.duration % 60;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     if (hours < 1) {
//             return `${minutes}м`;
//           } else {
//             return `${hours}ч ${minutes}м`;
//           }
//         }

//   return (
//     <div className="movie">
//       <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
//         <img src={movie.image} alt={movie.nameRU} className="movie__picture" />
//       </a>
//       <div className="movie__block">
//         <div className="movie__info">
//           <h2 className="movie__name">{movie.nameRU}</h2>
//           <button
//             type="button"
//             className={`${
//               location.pathname === "/movies" ? buttonSaveMovie : buttonDeleteMovie
//             }`}
//             // onClick={location.pathname === "/movies" ? handleLikeMovie : handleDislikeMovie}
//             onClick={ isLiked ? handleLikeMovie : handleDislikeMovie}
//           />
//         </div>
//         <p className="movie__duration">{handleTime()}</p>
//       </div>
//     </div>
//   );
// }

// export default MoviesCard;