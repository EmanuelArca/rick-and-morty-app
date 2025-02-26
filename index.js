import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

console.clear();

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// functions
async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  console.log(response);
  const data = await response.json();
  console.log(data);
}

fetchCharacters();