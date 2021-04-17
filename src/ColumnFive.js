import React from "react";
import "./ColumnFive.css";

export default function ColumnFive() {
  return (
    <div className="ColumnFive col-sm-4">
      <div className="card">
        <div className="card border-primary">
          <div className="card text-center">
            <div className="card-body">
              <div className="card-border text-primary">
                <span id="column-5">
                  <div className="card-header bg-transparent border-primary">
                    Tuesday <br />
                    <br />
                  </div>
                  <h1 className="card-title">
                    <img
                      id="icon-6"
                      src="https://openweathermap.org/img/wn/02d@2x.png"
                      alt="clear"
                    />
                  </h1>
                  <br />
                  <p className="card-text">
                    max temp 3° <br />
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
