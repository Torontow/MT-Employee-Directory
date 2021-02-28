import React from "react";
import "./style.css";

function Title() {
  return (
    <div
      className="border-bottom border-warning border-5 py-4"
      id="title-panel"
    >
      <h1>Employee Directory</h1>
      <p>Search for a name, or click the list heading to sort by that heading.</p>
    </div>
  );
}

export default Title;
