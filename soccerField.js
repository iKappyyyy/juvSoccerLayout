import layoutPositions from "./data/layoutPositions.js";

const players = document.querySelectorAll('.js-player');

const layoutPosition = layoutPositions['4-4-2'];
players.forEach((player, index) => {
  const playerId = `player${index + 1}`;

  player.style.gridRow = layoutPosition[playerId].row;
  player.style.gridColumn = layoutPosition[playerId].column;
});
