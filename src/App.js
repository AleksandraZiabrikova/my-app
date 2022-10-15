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
          <small>
            <a
              href="https://github.com/AleksandraZiabrikova/my-app.git"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code by Aleksandra Ziabrikova
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
