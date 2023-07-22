import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import CurrentDay from "./CurrentDay";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container-text-center">
      <div className="row">
        <div className="col-5">
          <div id="city" className="city">
            {props.data.city}
          </div>
          <div id="current-date">
            <CurrentDay date={props.data.date} />
          </div>
          <div className="city-inner">
            <div className="Temperature">
              <div className="current-temp">
                <span className="current-temp-number" id="current-temp-number">
                  <WeatherTemperature celsius={props.data.temperature} />
                </span>
                <span className="symbol">°</span>
                <span className="celsius">C</span>
              </div>
              <div className="vl"></div>
              <div className="grid-container">
                <span className="max-temp" id="max-temp">
                  {Math.round(props.data.maxTemp)}°
                </span>
                <span className="min-temp" id="min-temp">
                  {Math.round(props.data.minTemp)}°
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <i className="weather-icon" id="icon">
            {props.data.weatherIcon}
          </i>
          <div className="weather" id="weather">
            {props.data.weather}
          </div>
          <div className="realfeel">
            Feeling <span id="realfeel">{Math.round(props.data.realFeel)}</span>
            °
          </div>
          <div className="weather-alert" id="weather-alert">
            {props.data.weatherAlert}
          </div>
        </div>

        <div className="col-3">
          <div className="humidity">
            <div>
              🌡️
              <br />
              <span id="humidity">{props.data.humidity}</span> %
            </div>
          </div>
          <div className="clouds">
            <div>
              ☁️ <br />
              <span id="clouds">{props.data.clouds}</span> %
            </div>
          </div>
          <div className="winds">
            <div>
              🍃
              <br />
              <span id="winds">{props.data.winds}</span> m/s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
