import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Header from "./Header";
import Search from "./Search";
import Cities from "./Cities";
import Container from "./Container";

export default function Wrap() {
  return (
    <div className="container Wrap">
      <Header />
      <Search />
      <Cities />
      <br />
      <Container />
    </div>
  );
}
