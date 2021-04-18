import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">   
    <span className="list-group-item list-group-item-action active">      
        <span className="d-flex justify-content-between">
          <h4 className="mb-1" id="red-square">
            Weather in Moscow ✈️
          </h4>
          <h6 id="inject-text">Sunday 18 Mar, 02:24 </h6>
        </span>
        <large className="degrees" id="font-size">
          -4°C
        </large>
        <img
          id="icon"          
          src="https://openweathermap.org/img/wn/13d@2x.png"
          alt="clear"
        />
        <span id="sky-view">snow</span>
        <section id="temp-feel">feels like -7°C</section>
        <span id="degree" class="d-flex justify-content-between"></span>
      </span>
    </div>
  );
}
