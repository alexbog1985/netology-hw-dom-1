import TileGame from './tile-game/TileGame';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');

  const tileGame = new TileGame(document.querySelector('.tile-game'));

  setInterval(() => {
      tileGame.addGoblin();
  }, 1000)
});
