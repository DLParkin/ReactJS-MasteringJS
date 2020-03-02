import React, { Component } from "react";
import CharacterList from "./CharacterList";
import HeroesList from "./HeroesList";
import SquadStats from "./SquadStats";

import "../styles/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Super Squad</h2>
        <div className="row">
          <div className="col-sm">
            <CharacterList />
          </div>
          <div className="col-sm">
            <HeroesList />
          </div>
          <div className="col-sm">
            <SquadStats />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
