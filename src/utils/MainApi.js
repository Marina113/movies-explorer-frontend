class MainApi {
  constructor({ headers, url }) {
    this._headers = headers;
    this._url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register = (name, email, password) => {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkResponse);
  };

  login = (email, password) => {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._checkResponse);
  };

  getContent = (token) => {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  };

  //********Информация о пользователе с сервера */
  getUserInfo() {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  //********Редактирование профиля */
  setUserInfo(data) {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: data.name, email: data.email }),
    }).then(this._checkResponse);
  }

  //********Добавление фильмов
  saveMovie(movie) {
    const token = localStorage.getItem("token");
    // console.log(movie);
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        // image: `${"https://api.nomoreparties.co/"}${image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail,
        // thumbnail: `${"https://api.nomoreparties.co/"}${image.formats.thumbnail.url}`,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        movieId: movie.movieId,
      }),
    })
      .then(this._checkResponse)
      .then((res) => {
        return res;
      });
  }

  //********Удаление фильма
  deleteMovie(movieId) {
    // console.log(movieId);
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  //********Получение сохраненных фильмов
  getSavedMovies() {
    const token = localStorage.getItem("token");
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  // url: MAIN_URL,
  url: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
