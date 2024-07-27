import React from 'react';
import './App.css';
import Sidebar from './sidebar/sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Intro from './Pages/Intro';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/introduction" element={<Intro />} />
          <Route path="/binary-search" element={<Intro />} />
          <Route path="/big-o-notation" element={<Intro />} />
          <Route path="/sections" element={<Intro />} />
          <Route path="/contact" element={<Intro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
