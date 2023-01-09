import "../styles/style.css";
const word = `Hello`;
const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
