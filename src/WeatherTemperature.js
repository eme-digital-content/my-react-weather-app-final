import React, { useState } from "react";
import "./Weather.css";
import "./App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          °C |{" "}
          <a href="/" className="Fahrenheit" onClick={convertFah}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" className="Fahrenheit" onClick={convertCel}>
            {" "}
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
