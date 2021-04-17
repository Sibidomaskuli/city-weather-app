import React from "react";
import "./Submit.css";

export default function Submit() {
	return (
		<div className="Submit">
			<input type="button" value="my current location" id="clickIt" />
			<a
				href="#"
				className="list-group-item list-group-item-action"
				rel="noreferrer">
				<div className="d-flex w-250 justify-content-between">
					<medium className="text-muted" id="weather">
						Precipitation: 86% Wind: 3,9 m/s,NW Pressure: 740 mmHg
					</medium>
				</div>
			</a>
		</div>
	);
}