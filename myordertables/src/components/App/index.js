import Orders from '../OrdersPannel/OrdersPannel.js';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="http://localhost:4200/"
          rel="noopener noreferrer"
        >
          Management - Go To angular
        </a>
        <a
          href="http://localhost:8080/"
          rel="noopener noreferrer"
        >
          Reports - Go To vue
        </a>
        <a
          href="http://localhost:3000/tables"
          rel="noopener noreferrer"
        >
          Tables
        </a>
        <Orders />
      </header>
    </div>
  );
}

export default App;
