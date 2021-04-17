import React from "react";
import "./ColumnFour.css";

export default function ColumnFour() {
  return (
    <div className="ColumnFour col-sm-4">
      <div className="card">
        <div className="card border-info">
          <div className="card text-center">
            <div className="card-body">
              <span id="column-4">
                <div className="card-header bg-transparent border-info">
                  Monday <br />
                  <br />
                </div>
                <h1 className="card-title">
                  <img
                    id="icon-5"
                    src="https://openweathermap.org/img/wn/03d@2x.png"
                    alt="clear"
                  />
                </h1>
                <br />
                <p className="card-text">
                  max temp 7° <br />
                  min temp 3°
                </p>
                <small>sunny</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}