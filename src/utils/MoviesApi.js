class MoviesApi {
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

  //********Загрузка фильмов с сервера
  getInitialMovies = () => {
    // const token = localStorage.getItem("token");
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: {
        // "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkResponse)
    .catch((err) => console.log(err));
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;

  // export const MOVIES_URL = 'http://localhost:3000';  
  