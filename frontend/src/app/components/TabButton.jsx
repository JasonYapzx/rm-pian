
import React, { useState } from 'react';

const TabButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleColor = () => {
    setIsClicked(!isClicked);
  };

  const buttonClasses = `py-2 px-4 rounded focus:outline-none hover:bg-gray-400 ${
    isClicked ? 'bg-blue-400 text-white' : 'bg-gray-300 text-black'
  }`;

  return (
    <button className={buttonClasses} onClick={toggleColor}>
      Click Me
    </button>
  );
};

export default TabButton;
