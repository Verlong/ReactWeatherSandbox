import React, { useState } from "react";

export default function ShowWeather() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 28°C in ${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="ShowWeather">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
