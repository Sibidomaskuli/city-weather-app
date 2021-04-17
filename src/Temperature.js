import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <strong>
        <a href="#" className="active" id="celsius" rel="noreferrer"></a>
        °C|°F
        <a href="#" className="active" id="fahrenheit" rel="noreferrer"></a>
      </strong>
    </div>
  );
}
