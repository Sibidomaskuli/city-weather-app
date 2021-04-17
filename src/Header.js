import React from "react"; 
import "./Header.css";

export default function Header(){
    return(
        <div className="Header">
            <a
                href="#"
                className="list-group-item list-group-item-action active"
                aria-current="true"
                rel="noreferrer"
								>
<span className="d-flex justify-content-between">
    <h4 className="mb-1" id="red-square">
        Weather in Cape Town ✈️
    </h4>
    <h6 id="inject-text">
    Saturday 17 Apr, 01:20
    </h6> 
</span>
<large className="degree" id="font-size">
22.2°
</large>
    <img id="icon" src="https://openweathermap.org/img/wn/01d@2x.png" alt="clear"
    />
		<span id="sky-view">
clear sky
		</span>
		<section id="temp-feel">
feels like 20.3°C
		</section>
    <span id="degree" className="d-flex justify-content-between">
		</span>
		</a>
        </div>
    )
}