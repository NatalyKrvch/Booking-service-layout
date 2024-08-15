import { renderCard } from './card.js';

async function loadCards() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json'
    );
    const data = await response.json();
    const cardsContainer = document.querySelector('.cards-container');

    data.forEach((item) => {
      const card = renderCard(item);
      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading cards:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadCards);
