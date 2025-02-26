const cardContainer = document.querySelector('[data-js="card-container"]');     // Kann man auch mit Import machen

// Function Card erstellen

function createCharacterCard(
  imageSource,
  imageAltText,
  nameCardTitle,
  statusCardInfo,
  typeCardInfo,
  occurencesCardInfo
) {
  const cardItem = document.createElement("li");

  cardContainer.append(cardItem);
  cardItem.innerHTML = `
        <div class="card__image-container">
            <img
              class="card__image"
              src="${imageSource}"
              alt="${imageAltText}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${nameCardTitle}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${statusCardInfo}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${typeCardInfo}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${occurencesCardInfo}</dd>
            </dl>
          </div>`;
  // alle 6 Variablen werden benötigt: imageSource,imageAltText,nameCardTitle,statusCardInfo,typeCardInfo,occurencesCardInfo
  return cardItem;
}

createCharacterCard("emanuel");
export { createCharacterCard };
