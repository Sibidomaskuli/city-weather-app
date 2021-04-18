import React from "react";
import "./ColumnTwo.css";

export default function ColumnTwo() {
  return (
    <div className="ColumnTwo col-sm-4">
      <div className="card">
        <div className="card border-info">
          <div className="card text-center">
            <div className="card-body">
              <div className="card-border text-info">
                <span id="column-2">
                  <div
                    className="card-header bg-transparent border-info"
                    id="temp_today"
                  >
                    Today
                    <br />
                    <br />
                  </div>
                  <h1 className="card-title">
                    <img
                      id="icon-3"                      
                      src="https://openweathermap.org/img/wn/02d@2x.png"
                      alt="clear"
                    />
                  </h1>
                  <br />
                  <p className="card-text">
                    max temp 5° <br />
                    min temp 2°
                  </p>
                  <small>cold</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
