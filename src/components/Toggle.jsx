import React, { useState } from 'react';

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Toggle;
