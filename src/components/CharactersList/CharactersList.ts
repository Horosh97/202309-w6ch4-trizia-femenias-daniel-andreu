import characters from "../../data/Characters";
import CharacterCard from "../CharacterCard/CharacterCard";
import Component from "../Component/Component";

class CharactersList extends Component {
  public populate(): void {
    this.element.innerHTML = `
    <ul class="characters-list row list-unstyled"></ul>`;

    const parentElement = this.element.querySelector(".characters-list")!;
    characters.forEach((character) => {
      const card = new CharacterCard(parentElement, character.characterData);
      card.render();
    });
  }
}

export default CharactersList;
