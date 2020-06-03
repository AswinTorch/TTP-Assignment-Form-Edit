import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Aswin",
      lastName: "Nair",
      editClicked: false,
    };
  }

  handleClick = () => {
    this.setState((state) => ({
      editClicked: !state.editClicked,
    }));
  };

  render() {
    let display = !this.state.editClicked ? (
      <>
        <div>First Name: {this.state.firstName}</div>
        <div>Last Name: {this.state.lastName}</div> <br />
        <button onClick={this.handleClick}>Edit</button>
      </>
    ) : (
      <>
        <form action="">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
          <button onClick={this.handleClick}>Cancel</button>
        </form>
      </>
    );

    return (
      <div className="App">
        <h1>Form Edit</h1>
        <div>{display}</div>
      </div>
    );
  }
}

export default App;
