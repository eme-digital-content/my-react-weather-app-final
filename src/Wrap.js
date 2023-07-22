import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import Cities from "./Cities";
import Weather from "./Weather";

export default function Wrap() {
  return (
    <div className="container Wrap">
      <Header />
      <WeatherInfo />
      <Cities />
      <br />
      <Weather />
    </div>
  );
}
