export default class TileGame {
  constructor(element) {
    this.element = element;
  }

  clearTiles() {
    const tiles = this.element.querySelectorAll(".tile");
    tiles.forEach((tile) => {
      tile.classList.remove("tile-active");
    });
  }

  addGoblin() {
    const tiles = Array.from(this.element.querySelectorAll(".tile"));
    const inactiveTiles = tiles.filter(
      (tile) => !tile.classList.contains("tile-active"),
    );
    const randomIndex = Math.floor(Math.random() * inactiveTiles.length);

    this.clearTiles();
    inactiveTiles[randomIndex].classList.add("tile-active");
  }
}
