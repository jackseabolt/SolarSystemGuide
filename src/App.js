import React, { Component } from 'react';
import ResultsSection from './ResultsSection'; 
import SearchForm from './SearchForm'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background"></div>
        <h1>SOLAR SYSTEM GUIDE</h1>
        <SearchForm />
        <ResultsSection />
      </div>
    );
  }
}

export default App;
