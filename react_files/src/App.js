import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar/sidebar';

function App() {
  return (
    <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex-grow p-4">
      <h1 className="text-7xl text-blue-400">Work in progress</h1>
    </div>
  </div>
  );
}

export default App;
