import React, { Component } from "react";
import User from "./components/User";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <>
        <User />
        <Products />
      </>
    );
  }
}

export default App;

// Try
// Array of object on function based components and display it in another function based component
// useEffect() and its dependency array
