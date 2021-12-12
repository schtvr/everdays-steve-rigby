import React from 'react';
import './App.css';
import Results from './components/SearchResults';
import SortDropDown from './components/SortDropDown';

function App() {
  return (
    <div className="App">
      <SortDropDown />
      <Results />
    </div>
  );
}

export default App;
