import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <strong>
        <span className="active" id="celsius">
        °C
        </span>
        |
        <span className="active" id="fahrenheit">
        °F
        </span>
      </strong>
    </div>
  );
}
