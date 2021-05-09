import React, { useState, useEffect } from "react";
import "./DailyForecast.css"; 
import axios from "axios";
import DailyForecastDay from "./DailyForecastDay";

export default function DailyForecast(props) {
 let [loaded, setloaded]=useState(false);
 let [forecast, setForecast]=useState(null);

 useEffect(() => {
  setloaded(false);
 }, [props.coordinates]); 
 
  function displayResponse(response) {
   setForecast(response.data.daily);
   setloaded(true);
  }

 if (loaded) {  
  return (
   <div className="DailyForecast">
    <div className="row">
     {forecast.map(function (weatherForecast, index) {
      if (index<5) {
       return (
        <div className="col" key={index}>
         <DailyForecastDay data={weatherForecast} />
        </div>
       );       
      } else {
        return null; 
      }
     })}     
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
 
  
        