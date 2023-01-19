import { DOMSelectors } from "./dom";
import "../styles/style.css";

function injectPokemon() {
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151/`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      // DOMSelectors.name.textContent = data.name;
      data.results.forEach((pokemon) => {
        let name = pokemon.name;
        DOMSelectors.content.insertAdjacentHTML(
          "beforeend",
          `<div class="pokecard"> <p> Pokemon: ${name} </p> </div>`
        );
      });
    } catch (error) {
      DOMSelectors.name.textContent = `ERROR`;
    }
  }
  getData(URL);
}

injectPokemon();

// function makePokemonCard() {
//   const URL = `https://pokeapi.co/api/v2/pokemon/${DOMSelectors.searchbar.value}`;
//   async function getData(URL) {
//     try {
//       const response = await fetch(URL);
//       const data = await response.json();
//       // DOMSelectors.name.textContent = data.name;
//       data.abilities.forEach(
//         (ability) =>
//           (DOMSelectors.abilitylist.textContent = ability.ability.name)
//       );
//     } catch (error) {
//       DOMSelectors.response.textContent = `ERROR`;
//     }
//   }
//   getData(URL);
// }
// function clearInputs() {
//   DOMSelectors.searchbar.value = ``;
// }
// DOMSelectors.searchbtn.addEventListener("click", function () {
//   makePokemonCard();
//   clearInputs();
// });
