import React from 'react';
import './App.css';
import Results from './components/SearchResults';
import SortDropDown from './components/SortDropDown';

function App() {
  return (
    <div className="App">
      <div className="results-page__container">
        <SortDropDown />
        <Results />
      </div>
    </div>
  );
}

export default App;
