import charactersJSON from "../_data/characters.json";
import { ADD_CHARACTER, REMOVE_CHARACTER } from "../_actions";
import { createCharacter } from "./_helpers";

function characters(state = charactersJSON, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      const characters = state.filter(item => item.id !== action.id);
      return characters;
    case REMOVE_CHARACTER:
      const heroes = [...state, createCharacter(action.id)];
      return heroes;
    default:
      return state;
  }
}

export default characters;
