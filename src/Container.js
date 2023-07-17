import "./weather-styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default function Container() {
  return (
    <div className="container-text-center">
      <div className="row">
        <div className="col-5">
          <div id="city" className="city">
            Porto Alegre
          </div>
          <div id="current-date">Tuesday, February 23. 16:00</div>
          <div className="city-inner">
            <div className="current-temp">
              <span className="current-temp-number" id="current-temp-number">
                25
              </span>
              <span className="symbol">°</span>
              <span className="celsius">
                <a href="#" id="celsius" className="active">
                  C
                </a>
              </span>
            </div>
            <div className="vl"></div>
            <div className="grid-container">
              <span className="max-temp" id="max-temp">
                25°
              </span>
              <span className="min-temp" id="min-temp">
                22°
              </span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <i className="weather-icon" id="icon">
            ☁️
          </i>
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

        <div className="col-3">
          <div className="humidity">
            <div>
              🌡️
              <br />
              <span id="humidity">77</span> %
            </div>
          </div>
          <div className="clouds">
            <div>
              ☁️ <br />
              <span id="clouds">67</span> %
            </div>
          </div>
          <div className="winds">
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
