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
        { preloader ? (
          <Preloader />
        ) :
        movies?.length ? (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            onLikeMovie={onLikeMovie}
            onDislikeMovie={onDislikeMovie}
            moreButton={moreButton}
          />
        ) : isSearched ? (
          <p className="movies__nothing">Ничего не найдено</p>
        ) : (
          ""
        )}
        {/* {movies?.length ? (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            onLikeMovie={onLikeMovie}
            onDislikeMovie={onDislikeMovie}
            moreButton={moreButton}
          />
        ) : preloader ? (
          <Preloader />
        ) : isSearched ? (
          <p className="movies__nothing">Ничего не найдено</p>
        ) : (
          ""
        )} */}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
