import React, { Component } from "react";
import { connect } from "react-redux";
import MemeItem from "./MemeItem";
import "../styles/index.css";
import { Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 10,
      text0: "",
      text1: ""
    };
  }

  render() {
    return (
      <div>
        <h2>
          <u>Welcome to the Meme Generator!</u>
        </h2>
        <h4>
          <i>Write some text</i>
        </h4>
        <Form className="text-form">
          <FormGroup>
            <FormLabel>Top</FormLabel>
            <FormControl
              type="text"
              className="form-input"
              onChange={e => this.setState({ text0: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Bottom</FormLabel>
            <FormControl
              type="text"
              className="form-input"
              onChange={e => this.setState({ text1: e.target.value })}
            />
          </FormGroup>
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return (
            <MemeItem
              key={index}
              meme={meme}
              text0={this.state.text0}
              text1={this.state.text1}
            />
          )
        })}
        <div
          className="meme-button"
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          Load More....
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
