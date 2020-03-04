import React, { Component } from "react";

class RecipeItem extends Component {
  render() {
    let { recipe } = this.props;
    return (
      <div className="card recipe-card">
        <div className="card-body">
          <div className="row">
            {recipe.thumbnail && (
              <div class="col-2">
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
              <a href={recipe.href} class="btn btn-primary">Go to recipe</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeItem;
