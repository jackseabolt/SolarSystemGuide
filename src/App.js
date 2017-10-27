import React, { Component } from 'react';
import ResultsSection from './ResultsSection'; 
import SearchForm from './SearchForm'; 
import './App.css';

class App extends Component {

  componentDidMount() {
    this.audio.play(); 
  }

  render() {
    return (
      <div className="App">
        <div className="background"></div>
        <h1>SOLAR SYSTEM GUIDE</h1>
        <SearchForm />
        <ResultsSection />
        <audio ref={audio => this.audio = audio}>
          <source src="./sounds/drone.m4a" />
        </audio>
      </div>
    );
  }
}

export default App;
