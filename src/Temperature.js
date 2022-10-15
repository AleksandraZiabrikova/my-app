import React from "react";
import "./Temperature.css";
import Conditions from "./Conditions";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="d-flex weather-temperature">
          <img
            src="	https://openweathermap.org/img/wn/02n@2x.png"
            alt=""
            id="icon"
          />
          <div>
            <strong id="temperature">18</strong>
            <span className="units">°C</span>
          </div>
        </div>
      </div>
      <Conditions />
    </div>
  );
}
