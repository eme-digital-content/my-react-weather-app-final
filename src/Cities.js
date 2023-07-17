import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default function Cities() {
  return (
    <div className="Cities">
      <button id="current-location" className="current-location">
        Current location
      </button>
      <div className="popular">
        <h6 className="popular-text">Popular</h6>
        <button className="popular-city" id="new-york">
          New York
        </button>
        <button className="popular-city" id="paris">
          Paris
        </button>
        <button className="popular-city" id="toronto">
          Toronto
        </button>
        <button className="popular-city" id="tokyo">
          Tokyo
        </button>
        <button className="popular-city" id="lima">
          Lima
        </button>
      </div>
    </div>
  );
}
