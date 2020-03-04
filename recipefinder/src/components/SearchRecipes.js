import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  FormLabel
} from "react-bootstrap";
import { connect } from "react-redux";
import { setRecipes } from "../_actions";

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: "",
      dish: ""
    };
  }

  search() {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    console.log(url);
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => this.props.setRecipes(json));
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients </FormLabel>{" "}
          <FormControl
            type="text"
            placeholder="garlic, chicken"
            onChange={e => this.setState({ ingredients: e.target.value })}
          />
        </FormGroup>{" "}
        <FormGroup>
          <FormLabel>Dish </FormLabel>{" "}
          <FormControl
            type="text"
            placeholder="adobo"
            onChange={e => this.setState({ dish: e.target.value })}
          />
        </FormGroup>{" "}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default connect(null, { setRecipes })(SearchRecipes);
