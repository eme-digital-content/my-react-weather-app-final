import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <FormattedDate date={props.data.date} />
      <div className="row mt-3">
        <div className="col-3">
          <div className="d-flex">
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
              <hr />
              <span class="max-temp" id="max-temp">
                25°
              </span>
              <span class="min-temp" id="min-temp">
                22°
              </span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <i class="weather-icon" id="icon">
            <WeatherIcon code={props.data.icon} size={52} />
          </i>
          <div className="text-capitalize" class="weather" id="weather">
            {props.data.description}
          </div>
          <div class="realfeel">
            Feeling <span id="realfeel">30</span>°
          </div>
          <div class="weather-alert" id="weather-alert">
            Alert for Heavy Rain
          </div>
        </div>
        <div class="col-3">
          <div class="humidity">
            <div>
              🌡️
              <br />
              <span id="humidity">77</span> %
            </div>
          </div>
          <div class="clouds">
            <div>
              ☁️ <br />
              <span id="clouds">67</span> %
            </div>
          </div>
          <div class="winds">
            <div>
              🍃
              <br />
              <span id="winds">9.3</span> m/s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
