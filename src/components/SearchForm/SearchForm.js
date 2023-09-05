import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";
import { useFormWithValidation } from "../../utils/FormAndValid";

function SearchForm({
  handleSearchSubmit,
  handleSearchChange,
  searchText,
  // handleCheckbox,
  // setCheckbox,
  // checkbox,
  saveCheckbox,
  handleChangeCheckbox,
}) {
  const [searchError, setSearchError] = useState("");
  const { values, setValues, handleChange, errors, isValid, resetForm, setIsValid } = useFormWithValidation();
  const location = useLocation;

  useEffect(() => {
    resetForm({ search: searchText });
  }, [resetForm, searchText]);
  
  function handleSubmit(e) {
    e.preventDefault();
    if (!values.search || values.search.trim() === "") {
      setSearchError("Введите символ");
      return;
    }
    setSearchError("");
    handleSearchSubmit(values.search);
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <input
          id="search-input"
          name="search-input"
          className="search__input"
          type="text"
          value={values.search || ""}
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
            checked={saveCheckbox}
            // onChange={()=>{setCheckbox(!checkbox)}}
            onChange={handleChangeCheckbox}
          ></input>
          <span className="switch__slider"></span>
        </label>
        <p className="switch__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
