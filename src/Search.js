import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default function Search() {
  return (
    <div className="Search">
      <p className="type-city">Search for a city</p>
      <form autocomplete="off" id="search-form" action="/action_page.php">
        <input
          className="type-city"
          type="text"
          value=""
          autofocus="on"
          id="search-input"
          autocomplete="off"
        />
        <input className="search" id="search" type="submit" value="Search 🔍" />
      </form>
    </div>
  );
}
