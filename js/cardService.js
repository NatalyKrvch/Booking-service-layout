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

export function filterCards(filters) {
  let filteredCards = allCards;

  // Country filter
  if (filters.country && filters.country !== 'All Stays') {
    filteredCards = filteredCards.filter(
      (card) => card.location === filters.country
    );
  }

  // Superhost filter
  if (filters.superhost !== undefined) {
    filteredCards = filteredCards.filter(
      (card) => card.superhost === filters.superhost
    );
  }

  // Property type filter
  if (filters.propertyType && filters.propertyType !== '') {
    filteredCards = filteredCards.filter(
      (card) => card.type === filters.propertyType
    );
  }

  renderCards(filteredCards);
}
