import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-city">
        <input
          type="text"
          placeHolder="🧭Enter a city"
          autoComplete="off"
          autoFocus="off"
          id="box-contents"
        />
        <input type="submit" id="search-button" value="search" />
      </form>
    </div>
  );
}
