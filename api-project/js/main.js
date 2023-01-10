import "../styles/style.css";
import { DOMSelectors } from "./dom";
const word = `bliss`;
const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    DOMSelectors.word.textContent = data[0].word;
    DOMSelectors.definition.textContent =
      data[0].meanings[0].definitions[0].definition;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
