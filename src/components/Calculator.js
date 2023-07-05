import React from 'react';

const calcButtons = ['AC', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

function ShowButtons() {
  function CreateElement(text, index) {
    let className = '';
    if ((index + 1) % 4 === 0 || (index + 1) === 19) {
      className = ' makeMe-orange';
    } else if ({ text }.text === '0') {
      className = ' calc-button-0';
    }

    return (

      <button key={text} className={className} type="button">{text}</button>

    );
  }

  return (
    calcButtons.map(CreateElement)
  );
}

export default ShowButtons;
