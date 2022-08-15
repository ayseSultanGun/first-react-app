import React, { useState } from "react";
import axios from "axios";

export default function Data(props) {
  let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=df06795b838448a58ab71c48a5044292&units=imperial`;
  axios.get(apiUrl).then(showWeather);

  return (
    <div>
      <h1 className="degree-main">{temperature}°F</h1>

      <p>humidity: {humidity}% 💧</p>
      <p>wind: {wind} km/hr 🍃</p>
    </div>
  );
}
