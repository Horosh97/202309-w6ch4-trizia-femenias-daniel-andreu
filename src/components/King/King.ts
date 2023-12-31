import Character from "../Character/Character.js";
import { type CharacterData } from "../../types/types.js";

export class King extends Character {
  yearsOfReign;

  constructor(characterData: CharacterData, yearsOfReign: number) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  protected communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}

export default King;
