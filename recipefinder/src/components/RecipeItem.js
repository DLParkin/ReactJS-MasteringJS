import React, { Component } from "react";
import { connect } from "react-redux";
import { favouriteRecipe } from "../_actions";

class RecipeItem extends Component {
  constructor() {
    super();

    this.state = {
      favorited: false
    };
  }

  favourite(recipe) {
    this.props.favouriteRecipe(recipe);
    this.setState({ favorited: true });
  }

  render() {
    let { recipe } = this.props;
    return (
      <div className="card recipe-card">
        <div className="card-body">
          <div className="row">
            {recipe.thumbnail && (
              <div className="col-2">
                <img
                  src={recipe.thumbnail}
                  className="card-img-left"
                  alt={recipe.title}
                />
              </div>
            )}
            <div className="col-10">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">{recipe.ingredients}</p>
              <button href={recipe.href} className="btn btn-primary">
                Go to recipe
              </button>
              {this.props.favouriteButton ? (
                this.state.favorited ? (
                  <button className="btn btn-warning">
                    Already a favourite
                  </button>
                ) : (
                  <button
                    onClick={() => this.favourite(recipe)}
                    className="btn btn-success"
                  >
                    Add to Favourites
                  </button>
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { favouriteRecipe })(RecipeItem);
