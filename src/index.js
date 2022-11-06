import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import WeatherButton from "./WeatherButton";
import Forecast from "./Forecast";
//import SearchEngine from "./SearchEngine";
import ShowWeather from "./ShowWeather";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather Forecast</h1>
      <Weather city="Kyiv" temperature={23} />

      <WeatherButton />
      <Forecast />

      <ShowWeather />
    </div>
  </StrictMode>
);
