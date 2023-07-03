import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Calculator">
      <main>
        <div class="calc-divs">
          <div class="row-total">
            <h2 class="calc-total">0</h2>
          </div>
          <div class="row-one">
            <button class="calc-button-ac">AC</button>
            <button class="calc-button-+/-">+/-</button>
            <button class="calc-button-%">%</button>
            <button class="calc-button-/ makeMe-orange">/</button>
          </div>
          <div class="row-two">
            <button class="calc-button-7">7</button>
            <button class="calc-button-8">8</button>
            <button class="calc-button-9">9</button>
            <button class="calc-button-x makeMe-orange">X</button>
          </div>
          <div class="row-three">
            <button class="calc-button-4">4</button>
            <button class="calc-button-5">5</button>
            <button class="calc-button-6">6</button>
            <button class="calc-button-- makeMe-orange">-</button>
          </div>
          <div class="row-four">
            <button class="calc-button-1">1</button>
            <button class="calc-button-2">2</button>
            <button class="calc-button-3">3</button>
            <button class="calc-button-+ makeMe-orange">+</button>
          </div>
          <div class="row-five">
            <button class="calc-button-0">0</button>
            <button class="calc-button-.">.</button>
            <button class="calc-button-= makeMe-orange">=</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

