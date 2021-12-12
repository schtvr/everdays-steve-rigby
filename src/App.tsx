import React from 'react';
import './App.css';
import Results from './components/SearchResults';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="results-page__container">
        <Results />
      </div>
    </div>
  );
}

export default App;
