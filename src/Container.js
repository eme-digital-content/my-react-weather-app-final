import React, { useState } from "react";
import "./weather-styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import CurrentDay from "./CurrentDay";

export default function Container() {
  const [weatherData, setWeatherData] = useState({ ready: false });

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

  if (weatherData.ready) {
    return (
      <div className="container-text-center">
        <div className="row">
          <div className="col-5">
            <div id="city" className="city">
              {weatherData.city}
            </div>
            <div id="current-date">
              <CurrentDay date={weatherData.date} />
            </div>
            <div className="city-inner">
              <div className="Temperature">
                <div className="current-temp">
                  <span
                    className="current-temp-number"
                    id="current-temp-number"
                  >
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="symbol">°</span>
                  <span className="celsius">C</span>
                </div>
                <div className="vl"></div>
                <div className="grid-container">
                  <span className="max-temp" id="max-temp">
                    {Math.round(weatherData.maxTemp)}°
                  </span>
                  <span className="min-temp" id="min-temp">
                    {Math.round(weatherData.minTemp)}°
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <i className="weather-icon" id="icon">
              {weatherData.weatherIcon}
            </i>
            <div className="weather" id="weather">
              {weatherData.weather}
            </div>
            <div className="realfeel">
              Feeling{" "}
              <span id="realfeel">{Math.round(weatherData.realFeel)}</span>°
            </div>
            <div className="weather-alert" id="weather-alert">
              {weatherData.weatherAlert}
            </div>
          </div>

          <div className="col-3">
            <div className="humidity">
              <div>
                🌡️
                <br />
                <span id="humidity">{weatherData.humidity}</span> %
              </div>
            </div>
            <div className="clouds">
              <div>
                ☁️ <br />
                <span id="clouds">{weatherData.clouds}</span> %
              </div>
            </div>
            <div className="winds">
              <div>
                🍃
                <br />
                <span id="winds">{weatherData.winds}</span> m/s
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f5029b784306910c19746e40c14d6cd3";
    let city = "Miami";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
