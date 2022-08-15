import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState(props.city);
  let [todate, setTodate] = useState("now");

  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    let day = days[date.getDay()];

    setTodate(`<strong>${day}</strong>; as of ${hours}:${minutes}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
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
      <p id="date" onLoad={formatDate}>
        {todate}
      </p>
      <p>
        in <strong>{city}</strong>
      </p>
    </form>
  );
}
