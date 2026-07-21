import { Component } from "react";
import Display from "./Display";

// class class based component
class User extends Component {
  state = {
    id: 1,
    firstName: "Alina",
    lastName: "Joe",
    city: "Pune",
  };

  handleUpdate = () => {
    // to update state in class
    this.setState({
      city: "Banglore",
    });
  };

  render() {
    return (
      <>
        <Display
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          city={this.state.city}
        />
        <button onClick={this.handleUpdate}>Update</button>
      </>
    );
  }
}

export default User;

{
  /* <button onclick="update()"></button> */
}

// rcc + enter

// Display({firstName: "", lastName: "", city: ""})

// const add = (a, b) => {};

// add(10, 20);
