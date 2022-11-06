import React, { useState } from "react";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  let [unit, setUnit] = useState("Metric");

  function showFarehrenheit(event) {
    event.preventDefault();
    setUnit("Imperial");
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
    //let temperature = (props.temperature * 9) / 5 + 32;
    // alert(`The temperature in farehrenheit is ${Math.round(temperature)}°F`);
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("Metric");
    setTemperature(props.temperature);
  }

  return (
    <p>
      Weather in {props.city} is {temperature} ({unit}){" "}
      <a href="/" onClick={showCelsius}>
        °C
      </a>
      |{" "}
      <a href="/" onClick={showFarehrenheit}>
        °F
      </a>
    </p>
  );
}
