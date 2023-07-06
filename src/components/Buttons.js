import React from 'react';

const calcButtons = ['AC', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function Buttons({ onButtonClick }) {
  function CreateElement(text, index) {
    let className = '';
    if ((index + 1) % 4 === 0 || (index + 1) === 19) {
      className = ' makeMe-orange';

      if ({ text }.text === '=') {
        className = ' calc-button-iqual';
      }
    } else if ({ text }.text === '0') {
      className = ' calc-button-0';
    }

    return (

      <button key={text} className={className} type="button" onClick={() => onButtonClick({ text }.text)}>{text}</button>

    );
  }

  return (
    calcButtons.map(CreateElement)
  );
}

export default Buttons;
