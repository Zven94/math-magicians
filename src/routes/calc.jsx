import Calculator from '../components/Calculator';
import App from '../App';

const CalculatorPage = () => (
  <>
    <App />
    <div className="calculator-div-1">
      <h2>Let`s do some math!</h2>
      <main className="calc-divs">
        <Calculator />
      </main>

    </div>
  </>
);

export default CalculatorPage;
