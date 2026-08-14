// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreProvider from "./context/StoreProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <App />
  </StoreProvider>,
);
