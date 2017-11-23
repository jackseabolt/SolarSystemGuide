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
        <div class="video-background">
        <div class="video-foreground">
          <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

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
