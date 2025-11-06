export default class TileGame {
  constructor(element) {
    this.element = element;
  }

  addTile() {
    for (let i = 1; i <= 16; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      this.element.appendChild(tile);
    }
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

    // TODO: … необходимо добавить проверку случая,
    //  когда новый сгенерированный индекс не должен быть равен текущему индексу;
    //  если индексы равны - выполнить генерацию нового индекса;
    //  все это лучше сделать при помощи цикла do-while
    const randomIndex = Math.floor(Math.random() * inactiveTiles.length);

    this.clearTiles();
    inactiveTiles[randomIndex].classList.add("tile-active");
  }

  startGame() {
    this.addTile();
    this.goblinInterval = setInterval(() => {
    this.addGoblin();
    }, 1000);
  }

  stopGame() {
    clearInterval(this.goblinInterval);
    this.goblinInterval = null;
  }
}
