import React from "react";

export default function Converter(props) { 
   return (
    <span>
     <span className="temperature">
      <strong>{Math.round(props.celsius)}</strong>
     </span>
     <span className="Units">C°</span>
    </span>
   );
  }

      
