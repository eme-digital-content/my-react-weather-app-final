import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="current-temp">
        <span className="current-temp-number" id="current-temp-number">
          25
        </span>
        <span className="symbol">°</span>
        <span className="celsius">C</span>
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
  );
}
