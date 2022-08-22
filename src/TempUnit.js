import React, { useState } from "react";

export default function TempUnit(props) {
  let [unit, setUnit] = useState("imperial");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function celsius() {
    return Math.round(((props.fahrenheit - 32) * 5) / 9);
  }
  if (unit === "imperial") {
    return (
      <h1 className="degree-main">
        {props.fahrenheit}
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </h1>
    );
  } else {
    return (
      <h1 className="degree-main">
        {celsius()}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </h1>
    );
  }
}
