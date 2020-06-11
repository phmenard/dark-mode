import React, { useState } from 'react';

// add our darkmode hook
import {useDarkMode} from "../hooks/UseDarkMode";

const Navbar = () => {
  // use our darkmode hook to snage the bachground
  const [darkMode, setDarkMode] = useDarkMode('dark', true);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
