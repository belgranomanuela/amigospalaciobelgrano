import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amigos Palacio Belgrano
        </a>
      </header>

    </div>

  );
}
export default App;
