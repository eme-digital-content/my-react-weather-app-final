import React, { useState } from "react";
import "./weather-styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      city: response.data.name,
      weatherIcon: response.data.weather[0].icon,
      weather: response.data.weather[0].main,
      realFeel: response.data.main.feels_like,
      weatherAlert: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      clouds: response.data.clouds.all,
      winds: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <p className="type-city">Search for a city</p>
        <form onSubmit={handleSubmit}>
          <input
            className="type-city"
            type="search"
            value=""
            autofocus="on"
            id="search-input"
            autocomplete="off"
            onChange={handleCityChange}
          />
          <input
            className="search"
            id="search"
            type="submit"
            value="Search 🔍"
          />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
