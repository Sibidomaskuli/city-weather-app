import React from "react";
import "./ColumnThree.css";

export default function ColumnThree() {
  return (
    <div className="ColumnThree col-sm-4">
      <div className="card">
        <div className="card border-success">
          <div className="card text-center">
            <div className="card-body">
              <span id="column-3">
                <div className="card-header bg-transparent border-success">
                  Tomorrow <br />
                  <br />
                </div>
                <h1 className="card-title">
                  <img
                    id="icon-4"
                    src="https://openweathermap.org/img/wn/11d@2x.png"
                    alt="clear"
                  />
                </h1>
                <br />
                <p className="card-text">
                  max temp 3° <br />
                  min temp 1°
                </p>
                <small>rain</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
