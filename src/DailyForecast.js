import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import "bootstrap-icons"; 
import axios from "axios";

export default function DailyForecast(props) {
 let [loaded, setloaded]=useState(false);
 let [forecast, setForecast]=useState(null);
 
  function displayResponse(response) {
   setForecast(response.data.daily);
   setloaded(true);
  }

 if (loaded) {
  console.log(forecast); 
   return (
    <div className="DailyForecast">
     <div className="row">
      <div className="col">
       <div className="DailyForecast-day">
        <strong>Saturday</strong>
       </div>
       <WeatherIcon code="09d" size={36} />
       <div className="DailyForecast-temperature">
             <strong className="DailyForecast-temperature-morn">
             <i class="sun"></i>
               {forecast[0].temp.morn}°{" "}|{" "}</strong>
        <span className="DailyForecast-temperature-night">{forecast[0].temp.night}°</span>
       </div>
      </div>
     </div>
    </div>
   );
  } else {
  const key="64c64ffadfe4c3d751ef8a44c2608885";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat; 
  let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${key}&units=metric`;

  axios.get(url).then(displayResponse);
  
  return null;   
}
}