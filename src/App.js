import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row archive" id="archive"></div>
        <br />
        <Weather defaultCity="Istanbul" />
        <br />
        <div className="row" id="forecast"></div>
      </div>
      <div>
        <small>
          <a href="https://github.com/ayseSultanGun/first-react-app">
            Open-sourced code
          </a>{" "}
          by{" "}
          <a href="https://github.com/ayseSultanGun">ayse sultan guneroglu</a>
        </small>
      </div>
    </div>
  );
}
