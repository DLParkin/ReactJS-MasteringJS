import { ADD_CHARACTER } from "../_actions";
import { createCharacter } from "./_helpers";

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    default:
      return state;
  }
}

export default heroes;
