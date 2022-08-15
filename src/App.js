import React, { useState } from "react";
import "./App.css";
import Search from "./Search-form";
import Data from "./Data";
import Icon from "./Icon";

export default function App() {
  let [city, setCity] = useState("istanbul");
  return (
    <div className="App">
      <div className="container">
        <div className="row archive" id="archive"></div>
        <br />
        <div className="row">
          <div className="col-4">
            <div className="card middle-row">
              <div className="card-body">
                <br />
                and the weather is..
                <Search city={"istanbul"} />
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card middle-row">
              <div className="card-body">
                <br />
                <Data city={"istanbul"} />
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card middle-row">
              <div className="card-body">
                <Icon city={"istanbul"} />
              </div>
            </div>
          </div>
        </div>
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
