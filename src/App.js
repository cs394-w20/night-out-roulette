import React from 'react';
import logo from './logo.svg';
import './App.css';

import db from './components/firebase.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Night Out Roulette.
        </p>
      </header>
    </div>
  );
}

export default App;