import Quote from '../components/displayQuote';
import App from '../App';

const quotePage = () => (
  <>
    <App />
    <div className="quotePage-div">

      <main className="footer">
        <Quote />
      </main>
    </div>
  </>
);

export default quotePage;
