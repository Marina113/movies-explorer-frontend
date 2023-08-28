import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]); //Фильмы загруженные с сервера
  const [savedMovies, setSavedMovies] = useState([]); // Сохраненные фильмы
  const [searchedMovies, setSearchedMovies] = useState([]); // Фильмы через поиск
  // const [searchedSavedMovies, setSearchedSavedMovies] = useState([]); // Сохраненные фильмы через поиск
  const [moreButton, setMoreButton] = useState(false); // Стейт кнопки "Еще"
  const [searchText, setSearchText] = useState(""); //ввод текста в фильмах
  const [searchSavedText, setSearchSavedText] = useState(""); //ввод текста в сохр фильмах
  const [preloader, setPreloader] = React.useState(false);
  const [isResult, setIsResult] = React.useState(
    JSON.parse(localStorage.getItem("Result"))
  );
  const [isResultSaved, setIsResultSaved] = React.useState(
    JSON.parse(localStorage.getItem("ResultSaved"))
  );
  // const [foundMovies, setFoundMovies] = React.useState(JSON.parse(localStorage.getItem("storageMoviesCards"))); // поиск в Фильмах
  // const [foundSavedMovies, setFoundSavedMovies] = React.useState([]); // поиск в Сохраненных фильмах
  const [isSearched, setIsSearched] = React.useState(false);
  const [isSearchedSaved, setIsSearchedSaved] = React.useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const findedLocalMovies = localStorage.getItem("findedMovies" || []);
  const findedLocalShortMovies = localStorage.getItem(
    "findedShortMovies" || []
  );
  let findedMovies = JSON.parse(findedLocalMovies);
  let findedShortMovies = JSON.parse(findedLocalShortMovies);

  // console.log(findedShortMovies);

  //получение данных о пользователе и сохраненных фильмах
  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
        .then((data) => {
          // console.log(data);
          // localStorage.setItem('savedMovies', data);
          setCurrentUser(data[0]);
          setSavedMovies(data[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  //получение данных о фильмах
  useEffect(() => {
    if (isLoggedIn) {
      const moviesBeatFilm = [];
      moviesApi
        .getInitialMovies()
        .then((movies) => {
          movies.forEach((card) => {
            moviesBeatFilm.push(changeArray(card));
          });
          setMovies(moviesBeatFilm);
          localStorage.setItem("allMovies", JSON.stringify(moviesBeatFilm));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    // console.log(findedShortMovies);
    if (checkbox) {
      setSearchedMovies(findedShortMovies);
    } else {
      setSearchedMovies(findedMovies);
    }
  }, [checkbox]);

  function changeArray(movie) {
    const newList = {};
    newList.country = movie.country;
    newList.director = movie.director;
    newList.duration = movie.duration;
    newList.year = movie.year;
    newList.description = movie.description;
    newList.image = `${"https://api.nomoreparties.co"}${movie.image.url}`;
    newList.trailerLink = movie.trailerLink;
    newList.thumbnail = `${"https://api.nomoreparties.co"}${
      movie.image.formats.thumbnail.url
    }`;
    newList.movieId = movie.id;
    newList.nameRU = movie.nameRU;
    newList.nameEN = movie.nameEN;
    return newList;
  }

  useEffect(() => {
    handleTokenCheck();
  }, [isLoggedIn]);

  const handleTokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .getContent(token)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            navigate(location.pathname);
          } else {
            setIsLoggedIn(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //обработчик регистрации
  function handleRegister(name, email, password) {
    setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        if (err === "Ошибка 409") {
          setError("Пользователь с таким email уже существует.");
        } else if (err) {
          setError("При регистрации пользователя произошла ошибка.");
        } else {
          setError("");
        }
        setTimeout(() => {
          setError("");
        }, 10000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //обработчик авторизации
  function handleLogin(email, password) {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        if (err === "Ошибка 401") {
          setError("Вы ввели неправильный логин или пароль.");
        } else if (err) {
          setError(
            "При авторизации произошла ошибка. Переданный токен некорректен."
          );
        } else {
          setError("");
        }
        setTimeout(() => {
          setError("");
        }, 10000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //обработчик редактирования профиля
  function handleUpdateProfile(data) {
    mainApi
      .setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          setError("");
        }, 10000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //обработчик выхода из аккаунта
  function handleSignOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    setSearchedMovies([]);
    localStorage.removeItem("token");
    localStorage.removeItem("Result");
    localStorage.removeItem("ResultSaved");
    navigate("/");
  }

  //обработчик добавления фильмов в сохраненные
  function handleLikeMovie(movie) {
    setIsLoading(true);
    mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        // console.log(newMovie);
        setSavedMovies([newMovie, ...savedMovies]);
        // setMovies([newMovie, ...movies]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //обработчик удаления фильма из сохраненных
  function handleDeleteMovie(movie) {
    // console.log('test');
    setIsLoading(true);
    mainApi
      .deleteMovie(movie.movieId)
      .then(() => {
        const newMoviesList = savedMovies.filter((m) =>
          m.movieId === movie.movieId ? false : true
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  // обработчик поиска в Фильмах
  function searchMovies() {
    const filteredMovies = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchText.toLowerCase());
    });
    setPreloader(true);
    if (filteredMovies.length < 1) {
      setIsResult(false);
      setSearchedMovies([]);
      setTimeout(() => setPreloader(false), 500);
    } else {
      // setSearchedMovies(filteredMovies);
      findedMovies = filteredMovies;
      findedShortMovies = filteredMovies.filter(
        (movie) => movie.duration <= 40
      );
      localStorage.setItem("findedMovies", JSON.stringify(findedMovies));
      localStorage.setItem("findedShortMovies",JSON.stringify(findedShortMovies));
      if (checkbox) {
        setSearchedMovies(findedShortMovies);
      } else {
        setSearchedMovies(findedMovies);
      }
      setIsResult(true);
      setTimeout(() => setPreloader(false), 500);
    }
  }
  function handleSearchChange(e) {
    setSearchText(e.target.value);
  }
  function handleSearchSubmit() {
    // e.preventDefault();
    searchMovies();
    setIsSearched(true);
  }
 
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="body">
          <div className="page">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/movies"
                element={
                  <ProtectedRouteElement
                    element={Movies}
                    isLoggedIn={isLoggedIn}
                    isLoading={isLoading}
                    // onShowFavourites={onShowFavourites}
                    moreButton={moreButton}
                    onLikeMovie={handleLikeMovie}
                    onDislikeMovie={handleDeleteMovie}
                    savedMovies={savedMovies}
                    movies={searchedMovies}
                    handleSearchSubmit={handleSearchSubmit}
                    handleSearchChange={handleSearchChange}
                    preloader={preloader}
                    isSearched={isSearched}
                    isResult={isResult}
                    searchText={searchText}
                    setCheckbox={setCheckbox}
                    checkbox={checkbox}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRouteElement
                    element={SavedMovies}
                    isLoggedIn={isLoggedIn}
                    isLoading={isLoading}
                    onDislikeMovie={handleDeleteMovie}
                    savedMovies={savedMovies}
                    movies={savedMovies}
                    // movies={searchedSavedMovies}
                    // searchedMovies={searchedSavedMovies}
                    // handleSearchSubmit={handleSearchSavedSubmit}
                    // handleSearchChange={handleSearchSavedChange}
                    isSearched={isSearchedSaved}
                    isResult={isResultSaved}
                    searchText={searchSavedText}
                    // setCheckbox={setCheckbox}
                    // checkbox={checkbox}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRouteElement
                    element={Profile}
                    isLoggedIn={isLoggedIn}
                    onUpdateProfile={handleUpdateProfile}
                    isLoading={isLoading}
                    onSignOut={handleSignOut}
                    error={error}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  // isLoggedIn ? (
                  //   <Navigate to="/movies" replace />
                  // ) : (
                  <Register
                    handleRegister={handleRegister}
                    isLoading={isLoading}
                    error={error}
                  />
                  //   )
                }
              />
              <Route
                path="/signin"
                element={
                  // isLoggedIn ? (
                  //   <Navigate to="/movies" replace />
                  // ) : (
                  <Login
                    handleLogin={handleLogin}
                    isLoading={isLoading}
                    error={error}
                  />
                  //   )
                }
              />
              <Route path="/404" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
