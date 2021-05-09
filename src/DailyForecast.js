import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css"; 
import axios from "axios";

export default function DailyForecast() {
  function displayResponse(response) {
    console.log(response.data); 
  }
  const key="64c64ffadfe4c3d751ef8a44c2608885";
  let longitude=40.7;
  let latitude=74; 
  let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${key}&units=metric`;

  axios.get(url).then(displayResponse); 
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