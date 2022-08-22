import React from "react";

export default function WeatherInfo2(props) {
  return (
    <div className="col-3">
      <div className="card middle-row">
        <div className="card-body">
          <img
            src={`https://openweathermap.org/img/wn/${props.data2.icon}@2x.png`}
            alt={props.data2.description}
            className="icon-main"
          />
          <p>{props.data2.description}</p>
        </div>
      </div>
    </div>
  );
}
