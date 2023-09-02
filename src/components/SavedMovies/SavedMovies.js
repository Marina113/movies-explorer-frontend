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
  handleSearchSubmit,
  handleSearchChange,
  preloader,
  isSearched,
  // searchedMovies,
  searchText,
  setCheckbox,
  checkbox,
  setIsResult,
  handleCheckbox,
  saveCheckbox,
  handleChangeCheckbox,
  setInitialCardCount,
  initialCardCount
}) {
  return (
    <>
      <Header />
      <main className="saved-movies">
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
        {movies?.length ? (
          <MoviesCardList
            movies={movies}
            // savedMovies={filteredMovies}
            savedMovies={savedMovies}
            onDislikeMovie={onDislikeMovie}
            // searchedMovies={searchedSavedMovies}
            setInitialCardCount={setInitialCardCount}
            initialCardCount={initialCardCount}
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
