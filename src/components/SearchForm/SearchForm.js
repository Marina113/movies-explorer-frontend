import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({
  handleSearchSubmit,
  handleSearchChange,
  search,
  searchText,
  setCheckbox,
  checkbox
}) {
  // const [checkbox, setCheckbox] = useState(false);
  // const onCheckbox = () => setCheckbox(!checkbox);
  const [searchError, setSearchError] = useState("");

  function handleSubmit(e) {
    // console.log(searchText);
    e.preventDefault();
    if (searchText === undefined || searchText === "") {
      setSearchError("Введите символ");
      return;
    } else {
      setSearchError("");
      handleSearchSubmit();
    }
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <input
          id="search-input"
          name="search-input"
          className="search__input"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Фильм"
          // minLength="2"
          maxLength="40"
          autoComplete="off"
          // required
        />
        <button
          className="search__btn"
          // onClick={callSearchFunction}
          type="submit"
        ></button>
      </form>
      <span className="switch__error">{searchError}</span>
      <div className="switch">
        <label className="switch__box">
          <input
            className="switch__input"
            type="checkbox"
            checked={checkbox}
            onChange={()=>{setCheckbox(!checkbox)}}
          ></input>
          <span className="switch__slider"></span>
        </label>
        <p className="switch__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
