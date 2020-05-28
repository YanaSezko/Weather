import React, { Component } from 'react';


export const PLACES = [
    { name: "Харьков", city: "Kharkov"/* , zip: "94303" */ },
    { name: "Керчь", city: "Kerch" /* zip: "94088" */ },
    { name: "Лозовая", city: "Lozova"/* zip: "95062" */ },
    { name: "Киев", city: "Kyiv"/* zip: "96803" */ }
  ];

export default class WeatherDisplay extends Component {
    constructor() {
      super();
      this.state = {
        weatherData: null
      };
    }
    componentDidMount() {
      //const zip = this.props.zip;
      const city = this.props.city;
      const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
        city/* zip */ +
        "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric&lang=ru";
      fetch(URL).then(res => res.json()).then(json => {
        this.setState({ weatherData: json });
      });
    }

    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>;
        const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
          <div>
            <h1>
              В городе {weatherData.name}<br/>{weather.description} 
              <img src={iconUrl} alt={weatherData.description} />
            </h1>
            <p>Текущая: {weatherData.main.temp}°</p>
            <p>Максимальная: {weatherData.main.temp_max}°</p>
            <p>Минимальная: {weatherData.main.temp_min}°</p>
            <p>Скорость ветра: {weatherData.wind.speed} mi/hr</p>
          </div>
        );
  }
}

