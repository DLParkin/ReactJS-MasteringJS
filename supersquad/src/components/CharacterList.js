import React, { Component } from "react";
import { connect } from "react-redux";

class CharacterList extends Component {
  render() {
    const characters = this.props.characters;

    return (
      <div>
        Characters
        <ul>
          {characters.map(character => {
            return (
              <li key={character.id}>
                <div>{character.name}</div>
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
    characters: state.characters
  };
}

export default connect(mapStateToProps, null)(CharacterList);
