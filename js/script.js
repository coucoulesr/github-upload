const CONTAINER = document.querySelector(".btn-container");
const TEXTELEMENT = document.querySelector(".main-text");
const TRANSLATIONS = {
  "en" : ["English", "French", "Spanish", "Italian"],
  "fr" : ["Anglais", "Français", "Espagnol", "Italien"],
  "es" : ["Inglés", "Francés", "Español", "Italiano"],
  "it" : ["Inglese", "Francese", "Spagnolo", "Italiano"]
};

var buttons = [];

function addButton(parent, text, classArray = []) {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  classArray.push("btn");
  button.setAttribute("class", classArray.join(" "));
  button.innerHTML = text;
  parent.appendChild(button);
  buttons.push(button);
  return button;
}

function changeButtons(buttonArray, lang) {
    for (i = 0; i < buttonArray.length; i++) {
      buttonArray[i].innerHTML = TRANSLATIONS[lang][i]
    }
}

let en = addButton(CONTAINER, "English", ["en"]);
let fr = addButton(CONTAINER, "French", ["fr"]);
let es = addButton(CONTAINER, "Spanish", ["es"]);
let it = addButton(CONTAINER, "Italian", ["it"]);

en.addEventListener("click", () => { TEXTELEMENT.innerHTML = "Hello, world!"; changeButtons(buttons, "en")} );
fr.addEventListener("click", () => { TEXTELEMENT.innerHTML = "Bonjour, le monde!"; changeButtons(buttons, "fr")} );
es.addEventListener("click", () => { TEXTELEMENT.innerHTML = "¡Hola, mundo!"; changeButtons(buttons, "es")} );
it.addEventListener("click", () => { TEXTELEMENT.innerHTML = "Buon giorno, mondo!"; changeButtons(buttons, "it")} );
