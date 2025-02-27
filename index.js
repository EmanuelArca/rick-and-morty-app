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
let characterUrl = "https://rickandmortyapi.com/api/character";

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

// Globale Variablen
let currentUrl = `${characterUrl}?page=${page}`;
let prevUrl = null;
let nextUrl = null;

// Functions
characterUrl = `${characterUrl}?page=${page}`;

function callUrl(url) {
  if (url === null) {
    url = currentUrl;
  }

  return url;
}
// console.log(callUrl());
async function fetchCharacters(url) {
  const response = await fetch(callUrl(url));
  const data = await response.json();
  // Aktualisierung der "maxPages"
  maxPage = data.info.pages;
  prevUrl = data.info.prev;
  nextUrl = data.info.next;
  // console.log(prevUrl, nextUrl, currentUrl);
  pagination.textContent = `${page} / ${maxPage}`;

  cardContainer.innerHTML = "";

  // Charaktere erhalten
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
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page = page - 1;

    fetchCharacters(prevUrl);
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page = page + 1;

    fetchCharacters(nextUrl);
  }
});

// Experiments
// hier experimenteller Code
searchBar.addEventListener("focusin", () => {
  searchBar.classList.add("search-bar-color");
  searchBar.query.classList.add("search-bar-color", "search-bar__input-color");
  searchBar["search-button"].classList.add("search-bar__icon-color"); // ACHTUNG: Benennung der HTML Namen spielt eine Rolle, "-" Bindestriche werden nicht akzeptiert in JS in Punktnatation!!
});

searchBar.addEventListener("focusout", () => {
  searchBar.classList.remove("search-bar-color");
  searchBar.query.classList.remove("search-bar-color", "search-bar__input-color");
  searchBar["search-button"].classList.remove("search-bar__icon-color");
});

// Aufruf des Builds
fetchCharacters(currentUrl);

// Exports
