import React, { Component } from 'react';
import './App.css';
import WeatherDisplay, { PLACES } from './Components/WeatherDisplay';


class App extends Component {
  constructor() {
    super();
    this.state = {
    activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
              {place.name}
          </button>
        ))}
        <WeatherDisplay
          key={activePlace}
          city={PLACES[activePlace].city}
          //zip={PLACES[activePlace].zip}
        />
      </div>
    );
  }
}

export default App;
