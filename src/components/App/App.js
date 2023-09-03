import React from "react";
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
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
import {
  LG_INITIAL_CARD_COUNT,
  MD_INITIAL_CARD_COUNT,
  SM_INITIAL_CARD_COUNT,
  DESKTOP,
  TABLET,
} from "../../utils/constants";

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
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]); // Сохраненные фильмы через поиск
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
  const [isSearched, setIsSearched] = React.useState(false);
  const [isSearchedSaved, setIsSearchedSaved] = React.useState(false);
  const [checkboxSaved, setCheckboxSaved] = useState(false);

  const findedLocalMovies = localStorage.getItem("findedMovies" || []);
  const findedLocalShortMovies = localStorage.getItem(
    "findedShortMovies" || []
  );
  let findedMovies = JSON.parse(findedLocalMovies);
  let findedShortMovies = JSON.parse(findedLocalShortMovies);
  const allBeatfilmMovies = localStorage.getItem("allMovies");

  const findedLocalMoviesSaved = localStorage.getItem(
    "findedMoviesSaved" || []
  );
  const findedLocalShortMoviesSaved = localStorage.getItem(
    "findedShortMoviesSaved" || []
  );
  let findedMoviesSaved = JSON.parse(findedLocalMoviesSaved);
  let findedShortMoviesSaved = JSON.parse(findedLocalShortMoviesSaved);

  const [saveCheckbox, setSaveCheckbox] = useState(false);
  const [checkboxMoviesSaved, setCheckboxMoviesSaved] = useState(false);

  const [initialCardCount, setInitialCardCount] = useState(16);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", function (e) {
    setTimeout((e) => {
      setWidth(window.innerWidth);
    }, 100);
  });

  const resetCardCount = () => {
    if (width >= DESKTOP) {
      setInitialCardCount(LG_INITIAL_CARD_COUNT);
    } else if (width < DESKTOP && width >= TABLET) {
      setInitialCardCount(MD_INITIAL_CARD_COUNT);
    } else {
      setInitialCardCount(SM_INITIAL_CARD_COUNT);
    }
  };

  //получение данных о пользователе и сохраненных фильмах
  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
        .then((data) => {
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
    const savedSearch = localStorage.getItem("searchText");
    if (savedSearch) {
      setSearchText(savedSearch);
      setIsSearched(true);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (saveCheckbox) {
      setSearchedMovies(findedShortMovies);
    } else {
      setSearchedMovies(findedMovies);
    }
  }, [saveCheckbox]);

  useEffect(() => {
    if (checkboxMoviesSaved) {
      setSearchedSavedMovies(findedShortMoviesSaved);
    } else {
      setSearchedSavedMovies(findedMoviesSaved);
    }
  }, [checkboxMoviesSaved]);

  function handleChangeCheckbox() {
    const change = !saveCheckbox;
    setSaveCheckbox(change);
    localStorage.setItem("saveCheckbox", JSON.stringify(change));
  }

  function handleChangeCheckboxSaved() {
    const change = !checkboxMoviesSaved;
    setCheckboxMoviesSaved(change);
    // localStorage.setItem("checkboxMoviesSaved",JSON.stringify(change));
  }

  useEffect(() => {
    const stateFilter = JSON.parse(localStorage.getItem("saveCheckbox"));
    if (stateFilter !== null) {
      setSaveCheckbox(stateFilter);
    }
  }, []);

  useEffect(() => {
    searchMoviesSaved();
  }, [savedMovies]);

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
        setError("Обновление профиля прошло успешно!");
        setTimeout(() => {
          setError("");
        }, 10000);
      })
      .catch((err) => {
        if (err) {
          setError("При обновлении профиля произошла ошибка.");
        }
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
    setSearchSavedText("");
    localStorage.removeItem("Result");
    localStorage.removeItem("ResultSaved");
    navigate("/");
    setCheckboxMoviesSaved(false);

    setSearchText("");
    setSaveCheckbox(false);
  }

  //обработчик добавления фильмов в сохраненные
  function handleLikeMovie(movie) {
    // setIsLoading(true);
    mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //обработчик удаления фильма из сохраненных
  function handleDeleteMovie(movie) {
    // setIsLoading(true);
    mainApi
      .deleteMovie(movie.movieId)
      .then(() => {
        const newMoviesList = savedMovies.filter((m) =>
          m.movieId === movie.movieId ? false : true
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => console.log(err));
    // .finally(() => {
    //   setIsLoading(false);
    // });
  }

  //получение данных о фильмах
  useEffect(() => {
    setIsSearched(false);
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
        // setSearchText(searchText)
        .catch((err) => {
          // console.log(err);
          console.log(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        });
    }
    // const savedSearch = localStorage.getItem("searchText");
    // if (savedSearch) {
    //   setSearchText(savedSearch);
    //   setIsSearched(true);
    // }
  }, [isLoggedIn]);

  function searchMovies() {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    if (filteredMovies.length < 1) {
      setIsResult(false);
      setSearchedMovies([]);
    } else {
      findedMovies = filteredMovies;
      findedShortMovies = filteredMovies.filter(
        (movie) => movie.duration <= 40
      );
      localStorage.setItem("findedMovies", JSON.stringify(findedMovies));
      localStorage.setItem(
        "findedShortMovies",
        JSON.stringify(findedShortMovies)
      );
      if (saveCheckbox) {
        setSearchedMovies(findedShortMovies);
      } else {
        setSearchedMovies(findedMovies);
      }
      setIsResult(true);
    }
  }

  function handleSearchSubmit(searchText) {
    searchMovies(searchText);
    setIsSearched(true);
    setSearchText(searchText);
    resetCardCount();
    localStorage.setItem("searchText", searchText);
  }

  function handleSearchChange(e) {
    setSearchText(e.target.value);
  }

  // обработчик поиска в Сохраненных фильмах
  function searchMoviesSaved() {
    setIsSearched(false);
    const filteredMoviesSaved = savedMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchSavedText.toLowerCase());
    });
    if (filteredMoviesSaved.length < 1) {
      setIsResult(false);
      setSearchedSavedMovies([]);
    } else {
      findedMoviesSaved = filteredMoviesSaved;
      findedShortMoviesSaved = filteredMoviesSaved.filter(
        (movie) => movie.duration <= 40
      );
      localStorage.setItem(
        "findedMoviesSaved",
        JSON.stringify(findedMoviesSaved)
      );
      localStorage.setItem(
        "findedShortMoviesSaved",
        JSON.stringify(findedShortMoviesSaved)
      );
      if (checkboxMoviesSaved) {
        setSearchedSavedMovies(findedShortMoviesSaved);
      } else {
        setSearchedSavedMovies(findedMoviesSaved);
      }
      setIsResult(true);
      // setCheckboxMoviesSaved(false);
      // setSearchSavedText();
    }
  }

  function handleSearchSavedChange(e) {
    setSearchSavedText(e.target.value);
  }
  function handleSearchSavedSubmit() {
    // e.preventDefault();
    searchMoviesSaved();
    setIsSearchedSaved(true);
    resetCardCount();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="body">
          <div className="page">
            <Routes>
              <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
              <Route
                path="/movies"
                element={
                  <ProtectedRouteElement
                    element={Movies}
                    isLoggedIn={isLoggedIn}
                    isLoading={isLoading}
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
                    handleChangeCheckbox={handleChangeCheckbox}
                    saveCheckbox={saveCheckbox}
                    setInitialCardCount={setInitialCardCount}
                    initialCardCount={initialCardCount}
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
                    movies={searchedSavedMovies}
                    handleSearchSubmit={handleSearchSavedSubmit}
                    handleSearchChange={handleSearchSavedChange}
                    isSearched={isSearchedSaved}
                    isResult={isResultSaved}
                    searchText={searchSavedText}
                    handleChangeCheckbox={handleChangeCheckboxSaved}
                    saveCheckbox={checkboxMoviesSaved}
                    setInitialCardCount={setInitialCardCount}
                    initialCardCount={initialCardCount}
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
                  isLoggedIn ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Register
                      handleRegister={handleRegister}
                      isLoading={isLoading}
                      error={error}
                    />
                  )
                }
              />
              <Route
                path="/signin"
                element={
                  isLoggedIn ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Login
                      handleLogin={handleLogin}
                      isLoading={isLoading}
                      error={error}
                    />
                  )
                }
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
