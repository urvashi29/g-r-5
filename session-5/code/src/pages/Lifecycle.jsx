import React, { Component } from "react";

class Lifecycle extends Component {
  // Mounting
  constructor() {
    super();
    this.state = {
      name: "alina",
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log("getDerivedPropsFromState", state);
    // this.setState({
    //   name: "Alex",
    // });

    return null;
  };

  //  same as useEfffect(() => {}, [])
  componentDidMount = () => {
    //API Calls on initial rendering
    console.log("componentDidMount");
  };

  //   Unmounting
  componentWillUnmount = () => {
    // clearIntervals
    // remove event listeners
    console.log("componentWillUnmount");
  };

  render() {
    return <div>{this.state.name}</div>;
  }
}

export default Lifecycle;
