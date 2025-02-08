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

function App() {
  return ( //returning component of Sidebar
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<DefaultLandingPage />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/binary-search" element={<DefaultLandingPage />} />
          <Route path="/big-o-notation" element={<DefaultLandingPage />} />
          <Route path="/sections" element={<DefaultLandingPage />} />
          <Route path="/contact" element={<DefaultLandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
