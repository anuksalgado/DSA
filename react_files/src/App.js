import React from 'react';
import './App.css';
import Sidebar from './sidebar/sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DefaultLandingPage from './Pages/Intro';
import Introduction from './Pages/Introduction';
import Home from './Pages/Home'

function App() {
  return ( //returning component of Sidebar
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <Routes>
          <Route exact path="/DSA/Home" element={<Home />} />
          <Route path="/DSA/Introduction" element={<Introduction />} />
          <Route path="/DSA/binary-search" element={<DefaultLandingPage />} />
          <Route path="/DSA/big-o-notation" element={<DefaultLandingPage />} />
          <Route path="/DSA/sections" element={<DefaultLandingPage />} />
          <Route path="/DSA/contact" element={<DefaultLandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
