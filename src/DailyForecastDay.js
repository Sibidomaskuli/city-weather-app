import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecastDay";

export default function DailyForecastDay(props) {
 function mornTemperature() {
  let temperature=Math.round(props.data.temp.morn);
  return `${temperature}`;
 }

 function nightTemperature() {
  let temperature=Math.round(props.data.temp.night);
  return `${temperature}`;
  }
  
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = date.getDay();
    
    return days[day]; 
  }

 return (
  <div>
   <div className="DailyForecast-day">
    <strong>{day()}</strong></div>
   <WeatherIcon code={props.data.weather[0].icon} size={36} />
   <div className="DailyForecast-temperature">
    <strong className="DailyForecast-temperature-morn">
    <i class="bi bi-cloud-sun"></i>{" "}
     {mornTemperature()}°{" "}|{" "}</strong>
    <span className="DailyForecast-temperature-night">
    <i class="bi bi-cloud-moon-fill"></i>{" "}
     {nightTemperature()}°</span>
     </div> {/*DailyForecast-temperature*/}
     <span><small>
       {props.data.weather[0].description}
     </small>
     </span>
  </div>
 );
}
