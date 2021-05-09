import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css"; 

export default function DailyForecast() {
 return (
  <div className="DailyForecast">
   <div className="row">
    <div className="col">
     <div className="DailyForecast-day">
      <strong>Saturday</strong>           
     </div>    
    <WeatherIcon code="09d" size={36} />
     <div className="DailyForecast-temperature">
      <strong className="DailyForecast-temperature-max">9°{" "}|{" "}</strong>
    <span className="DailyForecast-temperature-min">7°</span>
    </div>
    </div>
   </div>
  </div>
 );
}