import { filterCards } from './cardService.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document
        .querySelectorAll('.filter-btn')
        .forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const country = button.textContent.trim();
      filterCards({ country });
    });
  });

  document
    .getElementById('superhost-toggle')
    .addEventListener('change', (event) => {
      const isSuperhost = event.target.checked;
      filterCards({ superhost: isSuperhost });
    });

  document
    .getElementById('property-type')
    .addEventListener('change', (event) => {
      const propertyType = event.target.value;
      filterCards({ propertyType });
    });
});
