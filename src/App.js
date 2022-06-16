import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const stuff = () => {
    console.log('DEFERRED PROMPT FOUND', window.deferredPrompt);
    window.deferredPrompt.prompt();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={stuff}>INSTALL ME</button>S
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
