import React from "react";
import "./Movies.css";
// import { Link, useLocation } from "react-router-dom";
// import strelka from "../../images/strelkaPortfolio.svg";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies() {
  return (
    <section className="movies">
        {/* <HeaderTwo /> */}
        <SearchForm />
        <FilterCheckbox />
        <Preloader />
        <MoviesCardList />
        <MoviesCard />
    </section>
  );
}

export default Movies;