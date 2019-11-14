import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="http://localhost:4200/"
          rel="noopener noreferrer"
        >
          Go To angular
        </a>
        <a
          href="http://localhost:8080/"
          rel="noopener noreferrer"
        >
          Go To vue
        </a>
      </header>
    </div>
  );
}

export default App;
