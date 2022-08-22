import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="col-3">
      <div className="card middle-row">
        <div className="card-body">
          <br />
          <h1 className="degree-main">{props.data.temperature}°F</h1>

          <p>humidity: {props.data.humidity}% 💧</p>
          <p>wind: {props.data.wind} km/hr 🍃</p>
        </div>
      </div>
    </div>
  );
}
