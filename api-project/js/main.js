import { DOMSelectors } from "./dom";
import "../styles/style.css";

function gen1Pokemon() {
  DOMSelectors.gen1.style.color = "#d4af37";
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151/`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.results.forEach(async (pokemon) => {
        const response2 = await fetch(pokemon.url);
        const data2 = await response2.json();
        console.log(data2);
        let name = data2.name;
        let img = data2.sprites.front_shiny;
        let ability = data2.abilities[0].ability.name;
        let hp = data2.stats[0].base_stat;
        let type = data2.types[0].type.name;
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
      });
    } catch (error) {
      console.log(error);
    }
  }
  getData(URL);
}

function gen2Pokemon() {
  DOMSelectors.gen2.style.color = "#d4af37";
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100/`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.results.forEach(async (pokemon) => {
        const response2 = await fetch(pokemon.url);
        const data2 = await response2.json();
        console.log(data2);
        let name = data2.name;
        let img = data2.sprites.front_shiny;
        let ability = data2.abilities[0].ability.name;
        let hp = data2.stats[0].base_stat;
        let type = data2.types[0].type.name;
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
      });
    } catch (error) {
      console.log(error);
    }
  }
  getData(URL);
}

function gen3Pokemon() {
  DOMSelectors.gen3.style.color = "#d4af37";
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135/`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.results.forEach(async (pokemon) => {
        const response2 = await fetch(pokemon.url);
        const data2 = await response2.json();
        console.log(data2);
        let name = data2.name;
        let img = data2.sprites.front_shiny;
        let ability = data2.abilities[0].ability.name;
        let hp = data2.stats[0].base_stat;
        let type = data2.types[0].type.name;
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
      });
    } catch (error) {
      console.log(error);
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

function removeContent() {
  const pokecardArray = Array.from(document.querySelectorAll(".pokecard"));
  pokecardArray.forEach((card) => card.remove());
  const errormsgArray = Array.from(document.querySelectorAll(".errormsg"));
  errormsgArray.forEach((msg) => msg.remove());
  DOMSelectors.gen1.style.color = "";
  DOMSelectors.gen2.style.color = "";
  DOMSelectors.gen3.style.color = "";
}
DOMSelectors.searchbtn.addEventListener("click", function () {
  removeContent();
  searchPokemon();
  clearInputs();
});
DOMSelectors.gen1.addEventListener("click", function () {
  removeContent();
  gen1Pokemon();
  clearInputs();
});
DOMSelectors.gen2.addEventListener("click", function () {
  removeContent();
  gen2Pokemon();
  clearInputs();
});
DOMSelectors.gen3.addEventListener("click", function () {
  removeContent();
  gen3Pokemon();
  clearInputs();
});
