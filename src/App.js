import logo from './logo600.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          grumpy-copycat
        </h2>
        <a
          className="App-link"
          href="https://www.instagram.com/gru_cop/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
