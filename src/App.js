import "./App.css";
import logo from "../src/abdurrasheed.JPG";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My name is Abdur-Rasheed Syed and i'm going to master React!</p>
        <a
          className="App-link"
          href="https://github.com/Abdur-Rasheed"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
