import React from "react";

export default function Conditions() {
  return (
    <div className="col-6">
      <ul>
        <li>
          Humidity: <span id="humidity">79</span>%
        </li>
        <li>
          Wind: <span id="wind">4</span> km/h
        </li>
      </ul>
    </div>
  );
}
