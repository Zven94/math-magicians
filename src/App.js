// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Calculator">
      <main>
        <div className="calc-divs">
          <div className="row-total">
            <h2 className="calc-total">0</h2>
          </div>
          <div className="row-one">
            <button className="calc-button-ac" type="submit">AC</button>
            <button className="calc-button-+/-" type="submit">+/-</button>
            <button className="calc-button-%" type="submit">%</button>
            <button className="calc-button-/ makeMe-orange" type="submit">/</button>
          </div>
          <div className="row-two">
            <button className="calc-button-7" type="submit">7</button>
            <button className="calc-button-8" type="submit">8</button>
            <button className="calc-button-9" type="submit">9</button>
            <button className="calc-button-x makeMe-orange" type="submit">X</button>
          </div>
          <div className="row-three">
            <button className="calc-button-4" type="submit">4</button>
            <button className="calc-button-5" type="submit">5</button>
            <button className="calc-button-6" type="submit">6</button>
            <button className="calc-button-- makeMe-orange" type="submit">-</button>
          </div>
          <div className="row-four">
            <button className="calc-button-1" type="submit">1</button>
            <button className="calc-button-2" type="submit">2</button>
            <button className="calc-button-3" type="submit">3</button>
            <button className="calc-button-+ makeMe-orange" type="submit">+</button>
          </div>
          <div className="row-five">
            <button className="calc-button-0" type="submit">0</button>
            <button className="calc-button-." type="submit">.</button>
            <button className="calc-button-= makeMe-orange" type="submit">=</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
