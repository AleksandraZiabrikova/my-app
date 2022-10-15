import React from "react";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <h1 id="city">Copenhagen</h1>
      <ul>
        <li>
          Last updated 23:22<span id="date"></span>
        </li>
        <li id="conditions"></li>
      </ul>
    </div>
  );
}
