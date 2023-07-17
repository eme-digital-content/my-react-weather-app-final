import "./App.css";
import { FaCloud } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="col-4">
        <span
          className="weather-icon"
          id="icon"
          role="img"
          aria-label="Weather Icon"
        >
          <FaCloud />
        </span>
        <div className="weather" id="weather">
          Cloudy
        </div>
        <div className="realfeel">
          Feeling <span id="realfeel">30</span>°
        </div>
        <div className="weather-alert" id="weather-alert">
          Alert for Heavy Rain
        </div>
      </div>
    </div>
  );
}
