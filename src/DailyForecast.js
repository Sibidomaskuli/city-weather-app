import React from "react";
import WeatherIcon from "./WeatherIcon"; 

export default function DailyForecast() {
 return (
  <div className="DailyForecast">
   <div className="row">
    <div className="col">
     <div>
     <div>
       <strong>        
        Saturday      
      </strong>
     </div>
    <WeatherIcon code="09d" />
     <div>
       <strong>9°{" "}</strong>
    | 7°
    </div>
     </div>
    </div>
   </div>
  </div>
 );
}