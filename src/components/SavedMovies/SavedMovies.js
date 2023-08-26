import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({
  movies,
  // savedMovies,
  onDislikeMovie,
  handleSearchSubmit,
  handleSearchChange,
  preloader,
  isSearched,
  searchedMovies
}) {
 
  return (
    <>
      <Header />
      <main className="saved-movies">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          handleSearchChange={handleSearchChange}
        />
        {movies.length ? (
          <MoviesCardList
            movies={movies}
            // savedMovies={savedMovies}
            onDislikeMovie={onDislikeMovie}
            searchedMovies={searchedMovies}
            // showFavourites={onShowFavourites}
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
