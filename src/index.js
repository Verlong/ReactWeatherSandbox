import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>JavaScript Closures</h1>
      <Weather city="New York" temperature={23} />
      <Weather city="Tokyo" temperature={32} />
      <Weather city="Syndey" temperature={4} />
    </div>
  </StrictMode>
);
