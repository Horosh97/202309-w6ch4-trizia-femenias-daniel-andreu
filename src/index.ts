import App from "./components/App/App.js";

const parentElement = document.querySelector(".app")!;
const container = new App("div", parentElement, "container");
container.render();
