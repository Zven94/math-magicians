import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from './logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  };

  const displayResult = calculatorData.next || calculatorData.total || '0';

  return (
    <>
      <div className="row-total">
        <h2 className="calc-total">{displayResult}</h2>
      </div>
      <div className="calc-grid">
        <Buttons onButtonClick={handleButtonClick} />
      </div>
    </>

  );
}

export default Calculator;
