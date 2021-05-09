import React from "react";

export default function FormattedDate() {  
  let now = new Date();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let today = days[now.getDay()];
  let hours = now.getHours();
  hours = ("0" + hours).slice(-2);
  let minutes = now.getMinutes();
  minutes = ("0" + minutes).slice(-2);
    return (
    <div>
      {today} {hours}:{minutes}
    </div>
  );
}