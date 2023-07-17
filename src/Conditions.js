import "./App.css";
import { FaTemperatureHigh, FaCloud, FaWind } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default function Conditions() {
  return (
    <div className="Conditions">
      <div className="col-3">
        <div className="humidity">
          <div>
            <FaTemperatureHigh />
            <br />
            <span id="humidity">77</span> %
          </div>
        </div>
        <div className="clouds">
          <div>
            <FaCloud />
            <br />
            <span id="clouds">67</span> %
          </div>
        </div>
        <div className="winds">
          <div>
            <FaWind />
            <br />
            <span id="winds">9.3</span> m/s
          </div>
        </div>
      </div>
    </div>
  );
}
