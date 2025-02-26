// Imports
import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

// Deklarationen
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

// Functions
async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  data.results.map((characterElement) => {
    // Deklaration der Objektelemente die durch die API gelesen werden
    const {
      image: imageSource,
      name: imageAltText,
      name: nameCardTitle,
      status: statusCardInfo,
      type: typeCardInfo, 
    } = characterElement;
    
    // Destruct "episode" separat, weil "length" operation nicht im destruct funktionierte
    const { episode } = characterElement;
    const occurencesCardInfo = episode.length;

    // Aufruf der Card-Creation
    createCharacterCard(
      imageSource,
      imageAltText,
      nameCardTitle,
      statusCardInfo,
      typeCardInfo,
      occurencesCardInfo
    );

    // Return wird nicht verwendet
    // return characterElement;
  });
}

// Experiments
// hier experimenteller Code

// Aufruf des Builds
fetchCharacters();

// Exports
