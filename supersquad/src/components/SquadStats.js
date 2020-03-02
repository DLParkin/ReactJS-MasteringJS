import React, { Component } from "react";
import { connect } from "react-redux";

class SquadStats extends Component {
  strength() {
    let strength = 0;
    this.props.heroes.forEach(hero => strength += hero.strength);
    return strength;
  }

  int() {
    let int = 0;
    this.props.heroes.forEach(hero => int += hero.intelligence);
    return int;
  }

  speed() {
    let speed = 0;
    this.props.heroes.forEach(hero => speed += hero.speed);
    return speed;
  }

  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul>
          <li className="list-group-item">
            <p><b>Overall Strength</b> {this.strength()}</p>
            <p><b>Overall Intelligence</b> {this.int()}</p>
            <p><b>Overall Speed</b> {this.speed()}</p>
          </li>
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

export default connect(mapStateToProps, null)(SquadStats);
