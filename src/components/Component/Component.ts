abstract class Component {
  protected readonly element: Element;
  protected readonly parentElement: Element;

  constructor(tagName: string, parentElement: Element, className: string) {
    this.element = document.createElement(tagName);
    this.parentElement = parentElement;
    this.element.className = className;
  }

  public render(): void {
    this.parentElement.appendChild(this.element);
  }

  abstract populate(): void;
}

export default Component;
