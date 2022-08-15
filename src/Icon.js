import React, { useState } from "react";
import axios from "axios";

export default function Icon(props) {
  let [description, setDescription] = useState("");
  let [icon, setIcon] = useState("");

  function showIcon(response) {
    setDescription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=df06795b838448a58ab71c48a5044292&units=imperial`;
  axios.get(apiUrl).then(showIcon);

  return (
    <div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="icon-main"
      />
      <p>{description}</p>
    </div>
  );
}
