import React from "react";
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  // Navigate,
  // useNavigate,
  // useLocation,
} from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  const [currentUser, setCurrentUser] = useState("");
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="body">
          <div className="page">
            {/* <Header email={email}
                    signOut={signOut} /> */}
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/saved-movies" element={<SavedMovies />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/error" element={<ErrorPage />} />
            </Routes>
            {/* <Footer /> */}

            {/* <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRouteElement
                    element={Main}
                    isLoggedIn={isLoggedIn}
                    userData={userData}
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    cards={cards}
                  />
                }
              />
              <Route
                path="*"
                element={
                  isLoggedIn ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Navigate to="/signin" replace />
                  )
                }
              />
            </Routes> */}
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
