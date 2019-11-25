import OrdersPannel from '../OrdersPannel/OrdersPannel.js';
import React from 'react';
import reducer from '../../reducers';
import { store } from '../../store/index.js';
import ButtonGroup from '../ButtonGroup/ButtonGroup.js';

console.log(store.getState())

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
        {/* <OrdersPannel tables={store.tables}/> */}
        <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
        {console.log(store.getState())}
      </header>
    </div>
  );
}

export default App;
