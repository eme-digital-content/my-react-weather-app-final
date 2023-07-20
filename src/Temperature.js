import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";

export default function Temperature() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Temperature">
        <div className="current-temp">
          <span className="current-temp-number" id="current-temp-number">
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
    );
  } else {
    const apiKey = "f5029b784306910c19746e40c14d6cd3";
    let city = "London";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
