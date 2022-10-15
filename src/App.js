import React from "react";
import "./styles.css";
import Search from "./Search";
import Overview from "./Overview";
import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <Overview />
          <Temperature />
        </div>
      </div>
    </div>
  );
}
