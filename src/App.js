import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './Components/WeatherDisplay';



const PLACES = [
  { name: "Киев", city: "Kyiv"},
  { name: "Харьков", city: "Kharkov"},
  { name: "Керчь", city: "Kerch"},
  { name: "Лозова", city: "Lozova"}
  ];

export default class App extends Component {
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
              {place.city}
          </button>
        ))}
        <WeatherDisplay key={activePlace} city={PLACES[activePlace].city}
       />
      </div>
    );
  }
}



