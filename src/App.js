import React from 'react';
import './App.css';
import ShowButtons from './components/Calculator';

function App() {
  return (
    <main className="calc-divs">
      <div className="row-total">
        <h2 className="calc-total">0</h2>
      </div>

      <div className="calc-grid">
        <ShowButtons />
      </div>
    </main>
  );
}

export default App;
