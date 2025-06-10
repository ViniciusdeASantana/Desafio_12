document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.card__favorite');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      const isFilled = heart.classList.toggle('filled');
      heart.src = isFilled ? 'img/icon-favorite.png' : 'img/icon-favorite-nomark.png';
    });
  });
});
