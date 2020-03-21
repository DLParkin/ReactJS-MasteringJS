import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import RecipeItem from "./RecipeItem";

export class FavouriteRecipeList extends Component {
  render() {
    return (
      <div>
        <h4 className="link">
          <Link to="/">Home</Link>
        </h4>
        <h4>Favourite Recipes</h4>
        {this.props.favouriteRecipes.map((recipe, idx) => {
          return (
            <RecipeItem key={idx} recipe={recipe} favouriteButton={false} />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favouriteRecipes: state.favouriteRecipes
  };
}

export default connect(mapStateToProps, null)(FavouriteRecipeList);
