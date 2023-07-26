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
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
// import Register from '../Register/Register';
// import Login from '../Login/Login';

function App() {
  const [currentUser, setCurrentUser] = useState("");
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="body">
          <div className="page">
            {/* <Header email={email}
                    signOut={signOut} /> */}
            <Header />
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
            {/* <Routes>
              <Route path="/signup" element={<Register />} />
              <Route path="/signin" element={<Login />} />
            </Routes> */}

            
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
              <Route
                path="/signup"
                element={<Register handleRegister={handleRegister} />}
              />
              <Route
                path="/signin"
                element={<Login handleLogin={handleLogin} />}
              />
            </Routes> */}
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
