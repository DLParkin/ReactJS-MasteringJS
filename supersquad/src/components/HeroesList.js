import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeCharacterById } from "../_actions";

class HeroesList extends Component {
  render() {
    const heroes = this.props.heroes;
    const remove = this.props.removeCharacterById;

    return (
      <div>
        <h4>Hero List</h4>
        <ul className="list-group">
          {heroes.map(hero => {
            return (
              <li key={hero.id} className="list-group-item">
                <div className="list-item">{hero.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => remove(hero.id)}
                >
                  +
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addCharacterById }, dispatch);
// }

export default connect(mapStateToProps, { removeCharacterById })(HeroesList);
