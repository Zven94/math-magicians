import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  const [pressedButton, setPressedButton] = useState('0');

  const handleButtonClicked = (button) => {
    setPressedButton(button);
  };

  return (
    <main className="calc-divs">
      <div className="row-total">
        <h2 className="calc-total">{pressedButton}</h2>
      </div>

      <div className="calc-grid">
        <Calculator handleButtonClicked={handleButtonClicked} />
      </div>
    </main>
  );
}

export default App;
