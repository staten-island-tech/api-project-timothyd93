import { DOMSelectors } from "./dom";
import "../styles/style.css";

function injectPokemon() {
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9/`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.results.forEach((pokemon) => {
        let name = pokemon.name;
        let img = pokemon.sprites.front_default;
        let ability1 = pokemon.abilities[0].ability.name;
        let ability2 = pokemon.abilities[1].ability.name;
        DOMSelectors.content.insertAdjacentHTML(
          "beforeend",
          `<div class = "pokecard"> <p id="pokemonname" class ="pokemoncontent"> ${name} </p> <img src= ${img} class ="pokemonimg">  <p  class ="pokemonabilities">${ability1}  </p> <p class="pokemonabilities"> ${ability2}</p>  </div>`
        );
      });
    } catch (error) {
      console.log(`Error`);
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
      // console.log(data.abilities[0].ability.name);
      // console.log(
      //   data.abilities.forEach((ability) => console.log(ability.ability.name))
      // );
      let name = data.name;
      let img = data.sprites.front_default;
      let ability1 = data.abilities[0].ability.name;
      let ability2 = data.abilities[1].ability.name;

      DOMSelectors.content.insertAdjacentHTML(
        "beforeend",
        `<div class = "pokecard"> <p id="pokemonname" class ="pokemoncontent"> ${name} </p> <img src= ${img} class ="pokemonimg">  <p  class ="pokemonabilities">${ability1}  </p> <p class="pokemonabilities"> ${ability2}</p>  </div>`
      );
    } catch (error) {
      console.log(`Error`);
      DOMSelectors.content.insertAdjacentHTML(
        "beforeend",
        `<div class ="errormsg"> <p> Sorry, we could not find the pokemon you were looking for</p>
        <p> Make sure you used all lowercase and spelled the pokemon's name correctly</p> </div>`
      );
    }
  }
  getData(URL);
}

DOMSelectors.searchbtn.addEventListener("click", function () {
  removeContent();
  searchPokemon();
  clearInputs();
});

function removeContent() {
  const pokecardArray = Array.from(document.querySelectorAll(".pokecard"));
  pokecardArray.forEach((card) => card.remove());
  const errormsgArray = Array.from(document.querySelectorAll(".errormsg"));
  errormsgArray.forEach((msg) => msg.remove());
}
