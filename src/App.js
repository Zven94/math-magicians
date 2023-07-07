import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/displayQuote';

function App() {
  return (
    <>
      <main className="calc-divs">
        <Calculator />

      </main>
      <footer className="footer">
        <Quote />
      </footer>
    </>
  );
}

export default App;
