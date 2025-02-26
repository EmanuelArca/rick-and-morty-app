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
  const data = await response.json();


  data.results.map((characterElement) => {
    // console.log(characterElement);
    const {
      image: imageSource,
      name: imageAltText,
      name: nameCardTitle,
      status: statusCardInfo,
      type: typeCardInfo,
    } = characterElement;
    // console.log(imageSource);
    // const { episodes } = characterElement;
    // console.log(episodes.length);

    createCharacterCard(
      imageSource,
      imageAltText,
      nameCardTitle,
      statusCardInfo,
      typeCardInfo,
      "1"
    );

    // imageSource,imageAltText,nameCardTitle,statusCardInfo,typeCardInfo,occurencesCardInfo
    // return characterElement.name;
  });
}

const arr1 = [1, 2, 3];

fetchCharacters();
// console.log(cardContainer);