import { DOMSelectors } from "./dom";
import "../styles/style.css";

function injectPokemon() {
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151/`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
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

function clearInputs() {
  DOMSelectors.searchbar.value = ``;
}

function searchPokemon() {
  const URL = `https://pokeapi.co/api/v2/pokemon/${DOMSelectors.searchbar.value}`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      let name = data.name;
      let img = data.sprites.front_default;
      DOMSelectors.content.insertAdjacentHTML(
        "beforeend",
        `<div class = "pokecard"> <p id="pokemonname"> ${name} </p> <img src= ${img} class ="pokemonimg">  </div>`
      );
    } catch (error) {
      console.log(`Error`);
    }
  }
  getData(URL);
}

DOMSelectors.searchbtn.addEventListener("click", function () {
  removeCard();
  searchPokemon();
  clearInputs();
});

function removeCard() {
  const pokecardArray = Array.from(document.querySelectorAll(".pokecard"));
  pokecardArray.forEach((card) => card.remove());
}
