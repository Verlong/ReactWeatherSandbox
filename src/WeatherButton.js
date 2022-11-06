import React from "react";

export default function WeatherButton() {
  function handleClick() {
    alert("Coming soon...");
  }

  return (
    <div className="WeatherButton">
      <button onClick={handleClick}>Current Temperature</button>
    </div>
  );
}
