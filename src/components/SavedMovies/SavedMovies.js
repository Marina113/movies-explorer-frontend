import React, { useEffect } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useState } from "react";

function SavedMovies({
  movies,
  savedMovies,
  onDislikeMovie,
  handleSearchSavedSubmit,
  handleSearchSavedChange,
  preloader,
  isSearched,
  // searchedMovies,
  searchText,
  setCheckbox,
  checkbox,
  setIsResult,

}) {
  // const findedLocalMovies = localStorage.getItem("findedMovies" || []);
  // const findedLocalShortMovies = localStorage.getItem(
  //   "findedShortMovies" || []
  // );
  // let findedMoviesSaved = JSON.parse(findedLocalMovies);
  // let findedShortMoviesSaved = JSON.parse(findedLocalShortMovies);
  // const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);

  // // const [searchedMovies, setSearchedMovies] = useState([]); // Фильмы через поиск
  // const [checkbox, setCheckbox] = useState(false);
  // const [shortMovies, setShortMovies] = useState(false);

  // function handleSearchSavedSubmit(movie) {
  //   setSearchedSavedMovies(movie);
  // }

  // function handleSearchSavedChange() {
  //   setShortMovies(!shortMovies);
  // }

  // useEffect(() => {
  //   const filteredMovies = savedMovies.filter((savedMovie) => {
  //     return savedMovie.nameRU.toLowerCase().includes(searchText.toLowerCase());
  //   });
  //   if (filteredMovies.length < 1) {
  //     // setIsResult(false);
  //     setSearchedSavedMovies([]);
  //     // setTimeout(() => setPreloader(false), 500);
  //   } else {
  //     findedMoviesSaved = filteredMovies;
  //     findedShortMoviesSaved = filteredMovies.filter(
  //       (savedMovie) => savedMovie.duration <= 40
  //     );
  //     if (checkbox) {
  //       setSearchedSavedMovies(findedShortMoviesSaved);
  //     } else {
  //       setSearchedSavedMovies(findedMoviesSaved);
  //     }
  //     // setIsResult(true);
  //     // setTimeout(() => setPreloader(false), 500);
  //   }
  // }, [savedMovies]);

  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm
          handleSearchSubmit={handleSearchSavedSubmit}
          handleSearchChange={handleSearchSavedChange}
          searchText={searchText}
          setCheckbox={setCheckbox}
          checkbox={checkbox}
        />
        {movies?.length ? (
          <MoviesCardList
            movies={movies}
            // savedMovies={filteredMovies}
            savedMovies={savedMovies}
            onDislikeMovie={onDislikeMovie}
            // searchedMovies={searchedSavedMovies}
          />
        ) : preloader ? (
          <Preloader />
        ) : isSearched ? (
          <p className="saved-movies__nothing">Ничего не найдено</p>
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
