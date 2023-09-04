import React, { useState, useEffect } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import {ERROR_NOTHING} from "../../utils/constants";

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
  handleCheckbox,

  saveCheckbox,
  handleChangeCheckbox,
  setInitialCardCount,
  initialCardCount,

  errorNothing
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
          handleCheckbox={handleCheckbox}

          handleChangeCheckbox={handleChangeCheckbox}
          saveCheckbox={saveCheckbox}
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
            setInitialCardCount={setInitialCardCount}
            initialCardCount={initialCardCount}
          />
        // ) : isSearched ? (
        ) : errorNothing ? (
          // <p className="movies__nothing">Ничего не найдено</p>
          <p className="movies__nothing">{ERROR_NOTHING}</p>
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
