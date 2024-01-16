// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <div className="background-image"></div>
      <h1>Welcome to our home Page</h1>
      <Link to="/about">
        <button>Go To About Page</button>
      </Link>
    </div>
  );
};

export default Home;
