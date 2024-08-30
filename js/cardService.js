import { renderCard } from './renderCard.js';

let allCards = [];

let activeFilters = {
  country: null,
  superhost: null,
  propertyType: null,
  bedrooms: null,
};

export async function loadCards() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json'
    );
    const data = await response.json();
    allCards = data;

    renderCards(data);
  } catch (error) {
    console.error('Error loading cards:', error);
  }
}

export function renderCards(cards) {
  const cardsContainer = document.querySelector('.cards-container');
  const isCardsContainerEmpty = cards.length === 0;
  cardsContainer.innerHTML = '';

  if (isCardsContainerEmpty) {
    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder');
    placeholder.textContent =
      'There are no stays that match your search criteria';
    cardsContainer.appendChild(placeholder);
  } else {
    cards.forEach((item) => {
      const card = renderCard(item);
      cardsContainer.appendChild(card);
    });
  }
}

export function filterCards(newFilters) {
  activeFilters = { ...activeFilters, ...newFilters };

  let filteredCards = allCards;

  const hasCountryFilter =
    activeFilters.country && activeFilters.country !== 'All Stays';
  const hasSuperhostFilter = activeFilters.superhost !== null;
  const hasPropertyTypeFilter =
    activeFilters.propertyType && activeFilters.propertyType !== '';
  const hasBedroomsFilter =
    activeFilters.bedrooms && activeFilters.bedrooms !== '';

  if (hasCountryFilter) {
    filteredCards = filteredCards.filter(
      (card) => card.location === activeFilters.country
    );
  }

  if (hasSuperhostFilter) {
    filteredCards = filteredCards.filter(
      (card) => card.superhost === activeFilters.superhost
    );
  }

  if (hasPropertyTypeFilter) {
    filteredCards = filteredCards.filter(
      (card) => card.type === activeFilters.propertyType
    );
  }

  if (hasBedroomsFilter) {
    filteredCards = filteredCards.filter(
      (card) => card.capacity.bedroom === parseInt(activeFilters.bedrooms, 10)
    );
  }

  renderCards(filteredCards);
}
