import React from "react";
import "./SearchForm.css";
// import iconSearch from "../../images/iconSearch.svg";

// function SearchForm() {
//   return (
//     <section className="search">
//       <form className="search__form">
//         <div className="search__container">
//           <input
//             id="search-input"
//             name="search-input"
//             className="search__input"
//             type="text"
//             placeholder="Фильм"
//             minLength="2"
//             maxLength="40"
//             autoComplete="off"
//           />
//           <button className="search__btn" type="submit"></button>
//         </div>
//         <div className="switch">
//           <label className="switch__box">
//             <input className="switch__input" type="checkbox"></input>
//             <span className="switch__slider"></span>
//           </label>
//           <p className="switch__text">Короткометражки</p>
//         </div>
//       </form>
//     </section>
//   );
// }

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input
          id="search-input"
          name="search-input"
          className="search__input"
          type="text"
          placeholder="Фильм"
          minLength="2"
          maxLength="40"
          autoComplete="off"
        />
        <button className="search__btn" type="submit"></button>
      </form>
      <div className="switch">
        <label className="switch__box">
          <input className="switch__input" type="checkbox"></input>
          <span className="switch__slider"></span>
        </label>
        <p className="switch__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
