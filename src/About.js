// About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur \n
        adipiscing elit, sed do eiusmod tempor incididunt \n
        ut labore et dolore magna aliqua. Ut enim ad minim \n
        veniam, quis nostrud exercitation ullamco laboris nisi \n
        ut aliquip ex ea commodo consequat. Duis aute irure dolor \n
         in reprehenderit in voluptate velit esse cillum dolore eu \n
         fugiat nulla pariatur. Excepteur sint occaecat cupidatat \n
          non proident, sunt in culpa qui officia deserunt mollit \n
          anim id est laborum.</p>
      <Link to="/profile">
        <button>View Profile</button>
      </Link>
    </div>
  );
};

export default About;
