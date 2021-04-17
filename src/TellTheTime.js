import React from "react"; 

export default function TellTheTime() {
    return(
      let now = new Date();
let Days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`
];
let today = days[now.getDay()];
let theHours = now.getHours();
theHours = ("0" + theHours).slice(-2);
let theMinutes = now.getMinutes();
theMinutes = ("0" + theMinutes).slice(-2);
let showIt = document.querySelector("#inject-text");
showIt.innerHTML = `${today} ${theHours}:${theMinutes}`;
            )
}