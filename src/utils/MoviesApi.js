// import {MOVIES_URL} from './constants';

function checkResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  
  // export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
  export const MOVIES_URL = 'http://localhost:3000';
  
  
  
  