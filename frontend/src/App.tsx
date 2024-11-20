import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './normalize.css'
import MainRoutes from './routes';
import Navbar from './components/Navbar';

function App() {
  const [isNavbarHovered, setNavbarHovered] = useState(false);

  return (
    <>
      <Navbar onHoverChange={setNavbarHovered} />
      <div className="Wrapper"
        style={{
          margin: isNavbarHovered ? '5% 7% 5% 12rem' : '5% 7% 5% 7rem',
          transition: 'margin 0.4s',
        }}>
        <MainRoutes />
      </div>
      </>
  );
}

export default App;
