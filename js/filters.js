import { filterCards } from './cardService.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      document
        .querySelectorAll('.filter-button')
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
      filterCards({ superhost: isSuperhost ? true : null });
    });

  document
    .getElementById('rooms-dropdown')
    .addEventListener('change', (event) => {
      const bedrooms = event.target.value;
      filterCards({ bedrooms });
    });
});
