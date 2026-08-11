import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(<App />);

// StrictMode is intentionally omitted for this classroom demonstration.
// In development, StrictMode may call component functions twice and make
// beginner-facing render logs harder to interpret.
