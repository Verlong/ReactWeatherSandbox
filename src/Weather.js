import React from "react";

export default function Weather(props) {
  function fahrenheitTemperature() {
    let temperature = (props.temperature * 9) / 5 + 32;
    return Math.round(temperature);
  }

  return (
    <p>
      The weather in {props.city} is {props.temperature}°C and{" "}
      {fahrenheitTemperature()}°F
    </p>
  );
}
