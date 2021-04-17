import React from "react";
import "./ColumnOne";

export default function ColumnOne1() {
  return (
    <div className="ColumnOne col-sm-4">
      <div className="card">
        <div className="card border-success">
          <div className="card text-center">
            <div className="card-body">
              <span id="column-1">
                <div className="card-header bg-transparent border-success">
                  Tomorrow <br />
                  <br />
                </div>
                <h6 className="card-title">
                  <img
                    id="icon-1"
                    src="https://openweathermap.org/img/wn/11d@2x.png"
                    alt="clear"
                  />
                </h6>
                <br />
                <p className="card-text">
                  max temp 3° <br />
                  min temp 1°
                </p>
                <small>windy</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
