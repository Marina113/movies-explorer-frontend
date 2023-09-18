import React, { useState, useEffect } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
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

function Movies({
  movies,
  savedMovies,
  onLikeMovie,
  onDislikeMovie,
  moreButton,
  handleSearchSubmit,
  handleSearchChange,
  preloader,
  searchText,
  setCheckbox,
  checkbox,
  handleCheckbox,
  saveCheckbox,
  handleChangeCheckbox,
  errorNothing
}) {

  const [initialCardCount, setInitialCardCount] = useState(LG_INITIAL_CARD_COUNT);
  const [width, setWidth] = useState(window.innerWidth);
  const [addCard, setAddCard] = useState(LG_ROW_CARD_COUNT);
  window.addEventListener("resize", function (e) {
    setTimeout((e) => {
      setWidth(window.innerWidth);
    }, 100);
  });

  useEffect(() => {
    if (width >= DESKTOP) {
      setInitialCardCount(LG_INITIAL_CARD_COUNT); //16
      setAddCard(LG_ROW_CARD_COUNT); //4
    } else if (width < DESKTOP && width >= TABLET) {
      setInitialCardCount(MD_INITIAL_CARD_COUNT); //8
      setAddCard(MD_ROW_CARD_COUNT); //2
    } else if (width < TABLET) {
      setInitialCardCount(SM_INITIAL_CARD_COUNT); //5
      setAddCard(SM_ROW_CARD_COUNT); //2
    }
  }, [width]);

  const resetCardCount = () => {
    if (width >= DESKTOP) {
      setInitialCardCount(LG_INITIAL_CARD_COUNT);
    } else if (width < DESKTOP && width >= TABLET) {
      setInitialCardCount(MD_INITIAL_CARD_COUNT);
    } else {
      setInitialCardCount(SM_INITIAL_CARD_COUNT);
    }
  };
  
  function handleClick() {
    setInitialCardCount(initialCardCount + addCard);
    }

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
          resetCardCount={resetCardCount}
          handleChangeCheckbox={handleChangeCheckbox}
          saveCheckbox={saveCheckbox}
        />
        { preloader ? (
          <Preloader />
        ) :
        movies?.length ? (
            <>
            <MoviesCardList
            movies={movies.slice(0, initialCardCount)}
            savedMovies={savedMovies}
            onLikeMovie={onLikeMovie}
            onDislikeMovie={onDislikeMovie}
            moreButton={moreButton}
            setInitialCardCount={setInitialCardCount}
            addCard={addCard}
          />
            {(movies.length > initialCardCount) &&
            <button className="card-list__more" onClick={handleClick}>
              Ещё
            </button>}
            </>
        ) : errorNothing ? (
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
