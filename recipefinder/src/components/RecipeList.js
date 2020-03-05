import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import RecipeItem from "./RecipeItem";

class RecipeList extends Component {
  render() {
    let recipes = this.props.recipes.results;
    return (
      <div>
        {this.props.favouriteRecipes.length > 0 ? (
          <h4 className="link">
            <Link to="/favourites">Favourites</Link>
          </h4>
        ) : (
          <div></div>
        )}

        {recipes &&
          recipes.map((recipe, idx) => {
            return (
              <RecipeItem key={idx} recipe={recipe} favouriteButton={true} />
            );
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);
