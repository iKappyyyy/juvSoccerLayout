const arrowLeft = document.querySelector('.js-arrow-left');
const arrowRight = document.querySelector('.js-arrow-right');
const layoutOption = document.querySelector('.js-cycle-option');

const layoutOptions = [
  '4-4-2',
  '4-1-2-1',
  '4-3-3',
  '3-5-2',
  '3-4-3',
  '5-3-2',
  '5-4-1'
]

let layoutIndex = 0;

arrowLeft.addEventListener('click', () => {
  layoutIndex--;
  if (layoutIndex < 0) layoutIndex = layoutOptions.length - 1;
  updateLayoutOption(layoutIndex);
});

arrowRight.addEventListener('click', () => {
  layoutIndex++;
  if (layoutOptions.length <= layoutIndex) layoutIndex = 0;
  updateLayoutOption(layoutIndex);
});

function updateLayoutOption(layoutIndex) {
  layoutOption.innerText = layoutOptions[layoutIndex];
}