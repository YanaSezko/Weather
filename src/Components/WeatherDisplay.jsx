import React, {Component} from 'react';

export default class WeatherDisplay extends Component {
  state = {
    weatherData: null
  };
  
  componentDidMount() {
    const name = this.props.name;
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" +
      name +
      "&appid=94737880558d647a06e637fcc697bf33&units=metric&lang=ru";
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
           <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
          </div>
    );
  }
}