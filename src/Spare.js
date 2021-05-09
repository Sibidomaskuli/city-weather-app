function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = date.getDay();
    
    return days[day]; 
  }

<div>
            <div className="WeatherForecast-day">
                <strong>
                {day()}
                </strong>
                </div>
            <img src={icon()} alt=" " />
            <div className="forecast-temp">
                <strong> {maxTemp()} </strong> | {minTemp()}
            </div>
        </div>