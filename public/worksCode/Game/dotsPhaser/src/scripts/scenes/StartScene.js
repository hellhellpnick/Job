export default class StartScene extends Phaser.Scene {
  constructor() {
    super('Start');
  }

  create() {
    this.createBackground();
    this.createButtons();
    this.setEvents();
  }

  createBackground() {
    this.add.sprite(0, 0, 'bg').setOrigin(0);
  }

  createButtons() {
    this.button1 = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY - 50,
        'Play with time',
        { font: 'bold 46px Arial', fill: '#FAFAD2' }
      )
      .setOrigin(0.5)
      .setInteractive();

    this.button2 = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 50,
        'Infinite game',
        { font: 'bold 46px Arial', fill: '#FAFAD2' }
      )
      .setOrigin(0.5)
      .setInteractive();
    this.button3 = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 150,
        'Game on the move',
        { font: 'bold 46px Arial', fill: '#FAFAD2' }
      )
      .setOrigin(0.5)
      .setInteractive();
  }

  setEvents() {
    this.button1.on('pointerdown', () => this.startGame('GameTime'), this);
    this.button2.on('pointerdown', () => this.startGame('GameInfinite'), this);
    this.button3.on('pointerdown', () => this.startGame('GameMove'), this);
  }

  startGame(data) {
    this.scene.start(data);
  }
}
