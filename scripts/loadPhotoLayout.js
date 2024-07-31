import photoPositions from "./data/photoPositions.js";

const rowLength = 11;
const layout = getLayout();
const players = document.querySelectorAll('.js-player');
const photoPosition = photoPositions[layout];
players.forEach((player, index) => {
  if (!index) return;
  const playerId = `player${index + 1}`;

  player.style.gridRow = `${photoPosition[playerId].row} / ${photoPosition[playerId].row + rowLength}`;
  player.style.gridColumn = photoPosition[playerId].column;
});

function getLayout() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('layout');
}
