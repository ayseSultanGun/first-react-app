import React from "react";

export default function WeatherForecastDay(props) {
  let imageSource = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  let alterText = props.data.weather[0].description;

  function highTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    return days[day];
  }

  return (
    <div className="col-2">
      <div className="card">
        <div className="card-body">
          <img src={imageSource} alt={alterText} className="icon" />

          <p>{day()}</p>
          <h3>{highTemp()}</h3>
        </div>
      </div>
    </div>
  );
}
