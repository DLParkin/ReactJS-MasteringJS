import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterList extends Component {
  render() {
    return (
      <div>
        Characters
      </div>
    )
  }
}

export default connect()(CharacterList);