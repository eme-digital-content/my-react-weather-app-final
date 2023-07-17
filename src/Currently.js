import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default function Currently() {
  return (
    <div className="Currently">
      <div className="container text-center">
        <div className="row">
          <div className="col-5">
            <div id="city" className="city">
              Porto Alegre
            </div>
            <div id="current-date">Tuesday, February 23. 16:00</div>
            <div className="city-inner"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
