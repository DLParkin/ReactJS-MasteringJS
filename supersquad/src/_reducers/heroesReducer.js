import { ADD_CHARACTER, REMOVE_CHARACTER } from "../_actions";
import { createCharacter } from "./_helpers";

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    case REMOVE_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    default:
      return state;
  }
}

export default heroes;
