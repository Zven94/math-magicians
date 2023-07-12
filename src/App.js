import React from 'react';
import './App.css';
//  import Calculator from './components/Calculator';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header className="header">
        <h2>Math Magicians</h2>
        <nav className="nav-li">
          <li>
            <Link to="/" className="header-nav-home">Home</Link>
          </li>
          <li>
            <Link to="/calculator" className="header-nav-calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote" className="header-nav-quote">Quote</Link>
          </li>
        </nav>
      </header>
    </>
  );
}

export default App;
