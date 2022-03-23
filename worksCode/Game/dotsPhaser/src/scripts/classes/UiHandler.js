import { GAME_STATE, GAME_CONSTANTS } from './../constants/Game';
import Button from './Button';

export default class UiHandler {
  constructor(scene, canvas, typeGame) {
    this.scene = scene;
    this.canvas = canvas;
    this.typeGame = typeGame;
    this.uiElements = {};
    this.create();
  }

  create() {
    let startOverlay = this.scene.add.rectangle(
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.canvas.width,
      this.canvas.height,
      0x000000,
      100
    );

    startOverlay.on('pointerdown', () => {
      this.scene.setState(GAME_STATE.RUNNING);
    });
    startOverlay.setInteractive();

    const titleText = this.scene.add.bitmapText(
      this.canvas.width / 2,
      this.canvas.height / 2 - 100,
      'bloggerSans',
      'D O T S',
      115
    );
    titleText.setOrigin(0.5, 0.5);

    const startText = this.scene.add.bitmapText(
      this.canvas.width / 2,
      this.canvas.height / 2 + 50,
      'bloggerSans',
      'Click to Start',
      64
    );
    startText.setOrigin(0.5, 0.5);

    this.uiElements[GAME_STATE.START] = [startOverlay, titleText, startText];

    this.timerDisplay = this.scene.add
      .bitmapText(
        this.canvas.width / 2,
        32,
        'bloggerSansBold',
        this.typeGame === 1
          ? ''
          : this.typeGame === 2
          ? Math.floor(GAME_CONSTANTS.ROUND_TIME / 1000)
          : GAME_CONSTANTS.ROUND_MOVE,
        64
      )
      .setOrigin(0.5, 0.5);

    this.timerDisplay.setVisible(false);

    this.pointsDisplay = this.scene.add.bitmapText(
      this.canvas.width - 100,
      32,
      'bloggerSansBold',
      0,
      48
    );
    this.pointsDisplay.setOrigin(0, 0.5);

    this.colorOverlay = this.scene.add.rectangle(
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.canvas.width,
      this.canvas.height,
      0xffffff,
      240
    );
    this.colorOverlay.setDepth(-8);

    this.uiElements[GAME_STATE.RUNNING] = [
      this.pointsDisplay,
      this.timerDisplay,
      this.colorOverlay,
    ];

    let gameOverOverlay = this.scene.add.rectangle(
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.canvas.width,
      this.canvas.height,
      0x000000,
      100
    );

    const timesUp = this.scene.add.bitmapText(
      this.canvas.width / 2,
      140,
      'bloggerSansBold',
      this.typeGame === 3 ? 'Your moves are over' : "Time's Up!",
      100
    );
    timesUp.setOrigin(0.5, 0.5);

    this.yourScore = this.scene.add.bitmapText(
      this.canvas.width / 2,
      260,
      'bloggerSans',
      'Your Score:',
      80
    );
    this.yourScore.setOrigin(0.5, 0.5);

    let restartButton = new Button(this.scene, 450, 425, 170, 60, 'Restart');
    restartButton.rectangle.on('pointerdown', () => this.scene.restart());

    let exitButton = new Button(this.scene, 750, 425, 170, 60, 'Exit');
    exitButton.rectangle.on('pointerdown', () => this.scene.exit());

    this.uiElements[GAME_STATE.OVER] = [
      gameOverOverlay,
      timesUp,
      this.yourScore,
      restartButton,
      exitButton,
    ];

    Object.values(this.uiElements).forEach((elements) => {
      elements.forEach((element) => {
        element.setVisible(false);
      });
    });
  }

  changeState(oldState, newState) {
    if (this.uiElements[oldState]) {
      this.uiElements[oldState].forEach((element) => {
        element.setVisible(false);
      });
    }

    this.uiElements[newState].forEach((element) => {
      element.setVisible(true);
    });
  }
}
