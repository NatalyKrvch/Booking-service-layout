import { renderCard } from './renderCard.js';

let allCards = [];

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
  cardsContainer.innerHTML = '';

  cards.forEach((item) => {
    const card = renderCard(item);
    cardsContainer.appendChild(card);
  });
}

let activeFilters = {
  country: null,
  superhost: null,
  propertyType: null,
  bedrooms: null,
};

export function filterCards(newFilters) {
  activeFilters = { ...activeFilters, ...newFilters };

  let filteredCards = allCards;

  // Country filter
  if (activeFilters.country && activeFilters.country !== 'All Stays') {
    filteredCards = filteredCards.filter(
      (card) => card.location === activeFilters.country
    );
  }

  // Superhost filter
  if (activeFilters.superhost !== null) {
    filteredCards = filteredCards.filter(
      (card) => card.superhost === activeFilters.superhost
    );
  }

  // Property type filter
  if (activeFilters.propertyType && activeFilters.propertyType !== '') {
    filteredCards = filteredCards.filter(
      (card) => card.type === activeFilters.propertyType
    );
  }

  // Bedrooms filter
  if (activeFilters.bedrooms && activeFilters.bedrooms !== '') {
    filteredCards = filteredCards.filter(
      (card) => card.capacity.bedroom === parseInt(activeFilters.bedrooms, 10)
    );
  }

  renderCards(filteredCards);
}
