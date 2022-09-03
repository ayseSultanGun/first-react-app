import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherInfo from "./WeatherInfo";
import WeatherInfo2 from "./WeatherInfo2";
import WeatherForecast from "./WeatherForecast";

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
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2b0dc7a07b7ea0b836cd8a76b8d6b4c&units=imperial`;
    axios.get(apiUrl).then(getWeather);
  }

  if (weatherData.ready) {
    return (
      <div>
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
          <WeatherInfo data={weatherData} />
          <WeatherInfo2 data2={weatherData} />
        </div>
        <div className="row">
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
