import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";

import AgeStats from "./AgeStats";

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: "",
      birthday: "1992-06-21",
      showStats: false
    };
  }

  changeBirthday() {
    this.setState({ birthday: this.state.newDate, showStats: true });
  }

  render() {
    return (
      <div className="App">
        <h2 className="birthday-font">Input your birthday!</h2>
        <Form inline className="birthday-form">
          <FormControl
            type="date"
            onChange={e => this.setState({ newDate: e.target.value })}
          />
          <Button
            className="birthday-button"
            onClick={() => this.changeBirthday()}
          >
            Submit
          </Button>
        </Form>
        {this.state.showStats && (
          <div className="fade age-stats">
            <AgeStats date={this.state.birthday} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
