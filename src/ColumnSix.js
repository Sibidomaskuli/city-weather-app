import React from "react";
import "./ColumnSix.css";

export default function ColumnSix() {
  return (
    <div className="ColumnSix col-sm-4">
      <div className="card">
        <div className="card border-info">
          <div className="card text-center">
            <div className="card-body">
              <span id="column-6">
                <div className="card-header bg-transparent border-info">
                  Wednesday <br />
                  <br />
                </div>
                <h1 className="card-title">
                  <img
                    id="icon-7"                    
                    src="https://openweathermap.org/img/wn/03d@2x.png"
                    alt="clear"
                  />
                </h1>
                <br />
                <p className="card-text">
                  max temp -1° <br />
                  min temp -3°
                </p>
                <small>light snow</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
