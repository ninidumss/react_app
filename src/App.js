import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Error from "./Error";

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </nav>
        <div className="shop-name">Kiana</div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:name?" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
