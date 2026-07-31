import React from "react";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Lifecycle from "./pages/Lifecycle";

const App = () => {
  return (
    <>
      <User />
      {/* <Dashboard /> */}
      <Contact />
      <Lifecycle />
    </>
  );
};

export default App;

// Task
// Try creating charts from Recharts using multiple api's
