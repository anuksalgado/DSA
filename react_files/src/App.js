import React, {useState} from 'react';
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

import {isMobile} from 'react-device-detect';
import { Fade } from "react-awesome-reveal";
import DataStructure from './Pages/DataStructure'

// eslint-disable-next-line
{/*Credit to - https://github.com/awesome-reveal/react-awesome-reveal for the react animation*/} 
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return ( //returning component of Sidebar
    <Router>
      
      <div className="flex min-h-screen">
  
      {/* Sidebar always visiblee on desktop and we set toggle on mobile */}
      {(!isMobile ||  isSidebarOpen) &&  (
        <Fade>
          <Sidebar /> 
        </Fade>
           
      )}
      {/* toggling  the sidebar*/}
      {isMobile && (
        <button
          className={`fixed p-4 top-4 z-50 px-4 py-2 rounded transition-all duration-300
            ${isSidebarOpen ? 'left-36 bg-red-500' : 'left-4 bg-gray-800'} text-white`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'X' : 'Open Menu'}
        </button>
      )}
        <Routes>
          <Route exact path="/DSA" element={<Home />} />
          <Route path="/DSA/Home" element={<Home />} />
          <Route path="/DSA/Introduction" element={<Introduction />} />
          <Route path="/DSA/data-structures" element={<DefaultLandingPage />} />
          <Route path="/DSA/algorithms" element={<DefaultLandingPage />} />
          <Route path="/DSA/sorting-algorithms" element={<DefaultLandingPage />} />
          <Route path="/DSA/big-o-notation" element={<DefaultLandingPage />} />
          <Route path="/DSA/sections" element={<DefaultLandingPage />} />
          <Route path="/DSA/contact" element={<Contact />} />
          <Route path="/DSA/Introduction/data-structures" element={<DataStructure />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
