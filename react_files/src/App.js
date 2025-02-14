import React from 'react';
import './App.css';
import Sidebar from './sidebar/sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DefaultLandingPage from './Pages/Intro'
import Introduction from './Pages/Introduction'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

function App() {
  return ( //returning component of Sidebar
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <Routes>
          <Route exact path="/DSA" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/binary-search" element={<DefaultLandingPage />} />
          <Route path="/big-o-notation" element={<DefaultLandingPage />} />
          <Route path="/sections" element={<DefaultLandingPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
