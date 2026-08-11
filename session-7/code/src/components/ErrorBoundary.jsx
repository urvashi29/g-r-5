import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // it will trigger when there is error
  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  // lifecycle component method
  componentDidCatch = (error) => {
    console.log(error);
  };

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
