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

    this.originalState = this.state;
  }

  // Helper function to toggle view
  toggle = () => {
    this.setState((state) => ({
      editClicked: !state.editClicked,
    }));
  };

  // Edit button leads to form to edit data
  edit = () => {
    this.toggle();
  };

  // Cancels edit mode and keeps original data
  cancel = () => {
    this.setState({ ...this.originalState });
    this.toggle();
  };

  // Saves the updated data
  save = () => {
    this.originalState = this.state;
    this.toggle();
  };

  // Form input handler function
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    // Conditional rendering based on button click state
    let display = !this.state.editClicked ? (
      <>
        <div>First Name: {this.state.firstName}</div>
        <div>Last Name: {this.state.lastName}</div> <br />
        <button onClick={this.edit}>Edit</button>
      </>
    ) : (
      <>
        <form action="">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <button onClick={this.cancel}>Cancel</button>
          <button onClick={this.save}>Save</button>
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
