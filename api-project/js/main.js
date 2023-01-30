import { DOMSelectors } from "./dom";
import "../styles/style.css";

function gen1Pokemon() {
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151/`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.results.forEach((pokemon) => console.log(pokemon.url));
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
      let name = data.name;
      let img = data.sprites.front_shiny;
      let abilityArray = data.abilities.forEach((ability) =>
        console.log(ability)
      );
      let ability = data.abilities[0].ability.name;
      let hp = data.stats[0].base_stat;
      let type = data.types[0].type.name;
      DOMSelectors.content.insertAdjacentHTML(
        "beforeend",
        `<div class = "pokecard"> 
        <h1 id="pokemonname" class ="pokemoncontent"> ${name} </h1> 
        <img src= ${img} alt = "${name} posing" class ="pokemonimg"> 
        <p class="pokemonstats">base hp: ${hp}</p> 
        <p class ="pokemonstats" id="abilities"> base ability: ${ability} </p>
        <p class="pokemonstats"> type: ${type}</p>
        </div>`
      );
      // data.abilities.forEach((abilityArray) =>
      //   document
      //     .getElementById("abilities")
      //     .insertAdjacentHTML("beforeend", abilityArray.abilities.name)
      // );
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
