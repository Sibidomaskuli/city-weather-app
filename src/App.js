import React from "react";
import Forecast from "./Forecast";
import * as Icon from `react-bootstrap-icons`;
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Forecast defaultCity="Beirut" />
      </div>
    <Icon.ArrowRight />
    </div>
         
  );
}