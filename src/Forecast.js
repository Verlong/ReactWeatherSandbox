import React from "react";

export default function Forecast() {
  function showForecast(event) {
    event.preventDefault();
    alert("Forecast feature is not ready yet");
  }
  return (
    <a href="#" onClick={showForecast}>
      See forecast
    </a>
  );
}
