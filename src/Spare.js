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