import React from "react";

export default function Weather(props) {
  function showFarehrenheit(event) {
    event.preventDefault();
    let temperature = (props.temperature * 9) / 5 + 32;

    alert(`The temperature in farehrenheit is ${Math.round(temperature)}°F`);
  }
  return (
    <p>
      The weather in {props.city} is {props.temperature}°C |{" "}
      <a href="/" onClick={showFarehrenheit}>
        °F
      </a>
    </p>
  );
}
