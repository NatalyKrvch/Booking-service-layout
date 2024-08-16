export const renderCard = (data) => {
  const { title, description, price, rating, superhost, capacity, image } =
    data;
  const card = document.createElement('article');
  card.classList.add('card');

  card.innerHTML = `
    <img
      src="${image}"
      alt="photo"
      class="card-image"
      loading="lazy"
    />
    ${superhost ? '<div class="superhost-badge">Superhost ⭐</div>' : ''}
    <div class="card-content">
      <h3 class="card-title">${title}</h3>
      <p class="card-description">
        ${description}
      </p>
      <div class="card-capacities">
        <div class="card-bedrooms">
          <img src="assets/images/house.svg" alt="bedroom">
          <span>${capacity.bedroom} bedroom</span>
        </div>
        <div class="card-guests">
          <img src="assets/images/user.svg" alt="guests">
          <span>${capacity.people} guests</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="price">$${price}<span class="duration">/night</span></span>
        <span class="rating">
          <img src="assets/images/star.svg" alt="rating">
          <span>${rating}</span>
        </span>
      </div>
    </div>
  `;

  return card;
};
