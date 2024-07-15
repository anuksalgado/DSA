import React, { useState } from 'react';

function Sidebar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible); //updating the value onclick
  };

  return (
    <div className="h-screen bg-blue-600 w-52">
      <div className="sidebar list-disc text-white text-3xl font-thin text-opacity-75">
        <ul className="space-y-8 pt-5 pl-2">
          <li><a className="active" href="#home">Home</a></li>
          <div className="flex justify-start items-center space-x-2">
            <li><a href="#news">Introduction</a></li>
            <button
              type="button"
              onClick={toggleDropdown}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${isDropdownVisible ? 'rotate-90' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </div>
          {isDropdownVisible && (
            <div id="dropdown" className="pl-5 text-lg space-y-4">
              <li><a className="active" href="#home">Binary search</a></li>
              <li><a href="#news">Big O notation</a></li>
            </div>
          )}
          <li><a href="#contact">Sections</a></li>
          <li><a href="#about">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
