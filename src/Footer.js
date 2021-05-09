import React from "react";
import "./Footer.css"; 

export default function Footer (){
 return (
  <div className="Footer">
   <footer>
    Brain- stormed by <em>Shirin Eldris</em> 🤖, {""}
    <a
     href="https://github.com/Sibidomaskuli/sunny-disposition.git"
     className="purple"
     target="_blank"
     rel="noopener noreferrer"
    >
     Open-Sourced on GitHub,
    </a>
    <a href="https://upbeat-fermat-86f53d.netlify.app/"
       className="green"
       target="_blank"
       rel="noopener noreferrer">
     {" "}
     Netlify hosted
    </a>
   </footer>
  </div>
 );
}