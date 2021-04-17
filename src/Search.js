import React, { useState} from "react";
import axios from 'axios';
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(null); 

  function updateCity(event) {
    setCity(event.target.value); 
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey="61de322b4c57e14ee5306e572d84bdb5"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(displayForecast);      
  }

  function displayForecast(response) {
    alert (`${city}'s weather : ${response.data.weather[0].description} 
    temp : ${Math.round(response.data.main.temp)}°C
    feels like : ${Math.round(response.data.main.feels_like)}°C
    Have a great day.. 🤖`) 
    console.log(response.data); 
  }

  return (
    <div className="Search">
      <form id="search-city" onSubmit={handleSubmit}>
        <input
          type="text"
          placeHolder="🧭Enter a city"
          autoComplete="off"
          autoFocus="off"
          id="box-contents"
          onChange={updateCity}
        />
        <input type="submit" id="search-button" value="Search" />
      </form>
    </div>
  );
}
