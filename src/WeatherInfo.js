import React from "react";
import TempUnit from "./TempUnit";

export default function WeatherInfo(props) {
  return (
    <div className="col-3">
      <div className="card middle-row">
        <div className="card-body">
          <br />
          <TempUnit fahrenheit={props.data.temperature} />

          <p>humidity: {props.data.humidity}% 💧</p>
          <p>wind: {props.data.wind} km/hr 🍃</p>
        </div>
      </div>
    </div>
  );
}
