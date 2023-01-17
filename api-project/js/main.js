// import "../styles/style.css";
// import { DOMSelectors } from "./dom";

// function findWord() {
//   const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${DOMSelectors.searchbar.value}`;
//   async function getData(URL) {
//     try {
//       const response = await fetch(URL);
//       const data = await response.json();
//       console.log(data);
//       DOMSelectors.word.textContent = data[0].word;
//       DOMSelectors.definition.textContent =
//         data[0].meanings[0].definitions[0].definition;
//     } catch (error) {
//       DOMSelectors.word.textContent = `ERROR`;
//       DOMSelectors.definition.textContent = ``;
//     }
//   }
//   getData(URL);
// }
// function clearInputs() {
//   DOMSelectors.searchbar.value = "";
// }
// DOMSelectors.searchbtn.addEventListener("click", function () {
//   findWord();
//   clearInputs();
// });
import { DOMSelectors } from "./dom";
const URL = `https://pokeapi.co/api/v2/pokemon/pikachu`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    console.log(data.name);
    data.abilities.forEach((abilites) => console.log(abilites.ability.name));
    data.stats.forEach((stat) => console.log(stat.base_stat));
    // DOMSelectors.response.textContent = data.name;
  } catch (error) {
    DOMSelectors.response.textContent = `ERROR`;
  }
}
getData(URL);
