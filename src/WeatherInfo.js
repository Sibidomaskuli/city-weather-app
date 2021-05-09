import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Converter from "./Converter"; 

export default function WeatherInfo(props) {
 return (
  <div className="WeatherInfo">
   <div className="container">
    <div className="row">
     <div className="col-6">
      <div className="Clearfix">
       <div className="float-left">
        <WeatherIcon
         code={props.data.icon} size={50} />
       </div>
      </div>
      <Converter celsius={props.data.temperature} />
      
      <ul className="Forecasting">
       <li>Atmospheric Pressure: {props.data.pressure} hPa</li>
       <li>Humidity: {props.data.humidity} %</li>
       <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
       </svg>Wind: {props.data.wind} km/h</li>
      </ul>
     </div>
     <div className="col-6">
      <ul className="cityName">
       <li>{props.data.city}</li>
       <li><FormattedDate date={props.data.date} /></li>
       <li>{props.data.description}</li>
      </ul>
     </div>
    </div>
   </div>
  </div>
 );
}