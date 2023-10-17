import type CharacterData from "../../types/types";

abstract class Character {
  isAlive = true;
  series = "Game of Thrones";
  characterData;

  constructor(characterData: CharacterData) {
    this.characterData = characterData;
  }

  protected communicate() {
    return `${this.characterData.name} says: `;
  }

  protected die() {
    this.isAlive = false;
  }
}

export default Character;
