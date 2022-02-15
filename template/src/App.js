import welcome from './avatar.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={welcome} className="App-logo" alt="welcome" />
        <h1>
          This is the customized template of
          <pre>npx create-react-app</pre>
        </h1>
        <a
          className="App-link"
          href="https://www.npmjs.com/package/cra-template-ads-custom-cra"
          target="_blank"
          rel="noopener noreferrer"
        >
          npm
        </a>
      </header>
    </div>
  );
}

export default App;
