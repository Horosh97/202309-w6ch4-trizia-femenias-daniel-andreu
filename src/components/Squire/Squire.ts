import Character from "../Character/Character";
import type CharacterData from "../../types/types";
import { Fighter } from "../Fighter/Fighter";

export class Squire extends Character {
  kissAssLevel: number;
  serves: Fighter;

  constructor(
    characterData: CharacterData,
    kissAssLevel: number,
    serves: Fighter,
  ) {
    super(characterData);
    this.kissAssLevel = this.kissAssLevelFilter(kissAssLevel);

    if (serves instanceof Fighter) {
      this.serves = serves;
    }
  }

  protected communicate(): string {
    return `${super.communicate()}I'm a loser`;
  }

  protected kissAssLevelFilter(kissAssLevel: number): number {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}
