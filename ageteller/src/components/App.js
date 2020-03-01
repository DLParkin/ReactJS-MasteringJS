import React, { Component, Fragment } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Form inline>
          <FormControl type="date" /><Button>Submit</Button>
        </Form>
      </Fragment>
    );
  }
}

export default App;
