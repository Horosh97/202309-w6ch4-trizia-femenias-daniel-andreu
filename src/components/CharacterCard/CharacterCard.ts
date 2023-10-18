import Component from "../Component/Component.js";
import type { CharacterData } from "../../types/types.js";

class CharacterCard extends Component {
  characterData;

  constructor(parentElement: Element, characterData: CharacterData) {
    super("li", parentElement, "col");
    this.characterData = characterData;
  }

  populate(): void {
    this.element.innerHTML = `
        <article class="character">
          <div class="card character__card">
            <img src="img/${this.characterData.imageSource}" alt="${this.characterData.name}, ${this.characterData.family}
            }" class="character__picture card-img-top" />
            <div class="card-body">
              <h2 class="character__name card-title h4">Name & family:${this.characterData.name} ${this.characterData.family}  </h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age:${this.characterData.age}</li>
                  <li>
                    State:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
    `;
  }
}

export default CharacterCard;
