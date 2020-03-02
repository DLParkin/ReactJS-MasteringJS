import charactersJSON from "../_data/characters.json";

export function createCharacter(id) {
  let character = charactersJSON.find(c => c.id === id);
  return character;
}