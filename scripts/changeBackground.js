const backgrounds = document.querySelectorAll('.js-background');
const imageBackground = document.querySelector('.js-background-image');

backgrounds.forEach(background => {
  background.addEventListener('click', () => {
    imageBackground.src = `../images/${background.dataset.image}.webp`;
  });
});
