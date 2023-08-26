import React, { useState, useEffect } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({
  movies,
  savedMovies,
  onLikeMovie,
  onDislikeMovie,
  moreButton,
  handleSearchSubmit,
  handleSearchChange,
  preloader,
  isResult,
  isSearched,
  searchText,
  setCheckbox,
  checkbox,
}) {
  //   const [loading, setLoading] = useState(true);
  //   const [movies, setMovies] = useState([]);
  //   const [errorMessage, setErrorMessage] = useState(null);
  // useEffect(() => {
  //     fetch('https://api.nomoreparties.co/beatfilm-movies')
  //       .then(response => response.json())
  //       .then(jsonResponse => {
  //         setMovies(jsonResponse.Search);
  //         setLoading(false);
  //       });
  //   }, []);
  // const search = searchValue => {
  //     setLoading(true);
  //     setErrorMessage(null)
  // // fetch(`https://api.nomoreparties.co?s=${searchValue}`)
  //       .then(response => response.json())
  //       .then(jsonResponse => {
  //         if (jsonResponse.Response === "True") {
  //           setMovies(jsonResponse.Search);
  //           setLoading(false);
  //         } else {
  //           setErrorMessage(jsonResponse.Error);
  //           setLoading(false);
  //         }
  //       });
  //   };

  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          handleSearchChange={handleSearchChange}
          searchText={searchText}
          setCheckbox={setCheckbox}
          checkbox={checkbox}
        />
        {movies.length ? (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            onLikeMovie={onLikeMovie}
            onDislikeMovie={onDislikeMovie}
            moreButton={moreButton}
            // showFavourites={onShowFavourites}
          />
        ) : preloader ? (
          <Preloader />
        ) : isSearched ? (
          <p className="movies__nothing">Ничего не найдено</p>
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
