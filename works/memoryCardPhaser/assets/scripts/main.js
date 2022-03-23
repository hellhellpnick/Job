const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: new GameScene(),
  cards: [1, 2, 3, 4, 5],
  rows: 2,
  timeOut: 30,
  cols: 5,
};
const game = new Phaser.Game(config);
