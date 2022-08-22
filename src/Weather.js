import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function getWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
    console.log(weatherData.date);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df06795b838448a58ab71c48a5044292&units=imperial`;
    axios.get(apiUrl).then(getWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-4">
          <div className="card middle-row">
            <div className="card-body">
              <br />

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="enter your city"
                    className="form-control"
                    onChange={updateCity}
                  />
                </div>

                <input type="submit" value="🔎" className="btn" />
                <h2 className="main-card-text">today</h2>
                <FormatDate date={weatherData.date} />
                <p>
                  in <strong>{weatherData.city}</strong>
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card middle-row">
            <div className="card-body">
              <br />
              <h1 className="degree-main">{weatherData.temperature}°F</h1>

              <p>humidity: {weatherData.humidity}% 💧</p>
              <p>wind: {weatherData.wind} km/hr 🍃</p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card middle-row">
            <div className="card-body">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt={weatherData.description}
                className="icon-main"
              />
              <p>{weatherData.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
