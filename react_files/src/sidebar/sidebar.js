import React from 'react';

function Sidebar() {
  return (
    
    <div className="h-screen bg-blue-600 w-40">

    <div className="sidebar list-disc text-white text-3xl font-bold">
      <ul className='space-y-14'>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>

    </div>
  );
}

export default Sidebar;
