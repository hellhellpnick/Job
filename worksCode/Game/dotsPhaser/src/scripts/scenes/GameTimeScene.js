import UiHandler from '../classes/UiHandler';
import DotGrid from '../classes/DotGrid';
import { DOT_STATE, DOT_COLORS } from '../constants/Dot';
import { GAME_STATE, GAME_CONSTANTS } from '../constants/Game';
import DotEffect from '../classes/DotEffect';

export default class GameTimeScene extends Phaser.Scene {
  constructor(nameScene = 'GameTime') {
    super(nameScene);
  }

  preload() {
    this.canvas = this.sys.game.canvas;
    this.pointer = this.input.activePointer;
    this.input.on('pointerup', () => this.pointerUp());
    this.points = 0;

    this.dotGrid = new DotGrid(
      this,
      GAME_CONSTANTS.NUM_ROWS,
      GAME_CONSTANTS.NUM_COLUMNS,
      GAME_CONSTANTS.NUM_COLORS,
      this.canvas.width / 2,
      this.canvas.height / 2 + 50,
      750,
      500
    );

    this.selection = {
      selected: [],
      colorId: 0,
      loop: false,
    };

    this.dotEffectGroup = this.add.group({
      defaultKey: 'dotEffect',
      maxSize: GAME_CONSTANTS.NUM_ROWS * GAME_CONSTANTS.NUM_COLUMNS,
      classType: DotEffect,
      createCallback: (dotEffect) => {
        dotEffect.setName('dotEffect' + this.dotEffectGroup.getLength());
        dotEffect.group = this.dotEffectGroup;
      },
    });
  }

  create() {
    this.createBackground();
    this.selectedLinesGraphics = this.add.graphics();
    this.selectedLinesGraphics.setDepth(-1);
    this.pointerLineGraphics = this.add.graphics();
    this.pointerLineGraphics.setDepth(-1);

    this.dotGrid.createRandomDots();

    this.createHandler();
    this.setState(GAME_STATE.START);
  }

  createHandler() {
    this.uiHandler = new UiHandler(this, this.canvas, 2);
  }

  createBackground() {
    this.add.image(0, 0, 'bg').setOrigin(0, 0).setDepth(-10);
  }

  update() {
    this.dotGrid.dotGroup.children.iterate((dot) => dot.update());
    this.updatePointerLine();
    this.updateCounterDisplay();
  }

  setState(state) {
    this.uiHandler.changeState(this.state, state);
    this.state = state;

    switch (state) {
      case GAME_STATE.RUNNING:
        this.dotGrid.createRandomDots();
        this.endTime = this.time.now + GAME_CONSTANTS.ROUND_TIME + 900;
        this.points = 0;
        this.updateColorOverlay();
        break;

      case GAME_STATE.OVER:
        this.uiHandler.yourScore.setText('Your Score: ' + this.points);
        this.pointerUp();
        this.selection.selected = [];
        this.selection.loop = false;
        this.updateSelectedLines();
        this.updatePointerLine();
        this.updateColorOverlay();
        break;
    }
  }

  dotClicked(dot) {
    let selected = this.selection.selected;

    if (this.state !== GAME_STATE.RUNNING) return;

    if (selected.length === 0) {
      dot.setState(DOT_STATE.SELECTED);
      selected.push(dot);
      this.selection.colorId = dot.colorId;
      this.addDotEffect(dot.x, dot.y, dot.colorId);
    }
  }

  dotHovered(dot) {
    let selected = this.selection.selected;

    if (this.state !== GAME_STATE.RUNNING) return;

    if (
      selected.length === 0 ||
      !this.dotGrid.checkAdjacent(dot, selected[selected.length - 1])
    )
      return;

    if (
      selected.length > 0 &&
      dot.state !== DOT_STATE.SELECTED &&
      dot.colorId === this.selection.colorId &&
      this.dotGrid.checkAdjacent(dot, selected[selected.length - 1]) &&
      !this.selection.loop
    ) {
      dot.setState(DOT_STATE.SELECTED);
      selected.push(dot);
      this.addDotEffect(dot.x, dot.y, dot.colorId);
    } else if (
      selected.length > 1 &&
      dot.name === selected[selected.length - 2].name
    ) {
      if (this.selection.loop) {
        this.selection.loop = false;
      } else {
        selected[selected.length - 1].setState(DOT_STATE.NONE);
      }
      selected.pop();
      this.selection.loop = false;
    } else if (
      selected.length > GAME_CONSTANTS.MIN_LOOP_COUNT - 1 &&
      dot === selected[0]
    ) {
      selected.push(dot);
      this.selection.loop = true;
      this.addDotEffect(dot.x, dot.y, dot.colorId);
    }

    this.updateColorOverlay();
    this.updateSelectedLines();
  }

  pointerUp() {
    if (this.state !== GAME_STATE.RUNNING) return;

    let selected = this.selection.selected;
    if (selected.length === 0) return;

    if (selected.length === 1) {
      selected[0].setState(DOT_STATE.NONE);
    } else if (this.selection.loop) {
      let numRemoved = this.dotGrid.removeAllDotsColorId(
        this.selection.colorId
      );
      this.points += numRemoved;
      this.selection.loop = false;
    } else {
      this.dotGrid.removeDots(selected);
      this.points += selected.length;
    }
    this.uiHandler.pointsDisplay.setText(this.points);
    this.selection.selected = [];
    this.updateColorOverlay();
    this.updateSelectedLines();
  }

  restart() {
    this.setState(GAME_STATE.RUNNING);
  }

  exit() {
    this.scene.start('Start');
  }

  updateCounterDisplay() {
    if (this.state === GAME_STATE.RUNNING) {
      if (this.endTime) {
        let timeLeft = this.endTime - this.time.now;
        let secondsLeft;

        if (this.time.now > this.endTime) {
          this.setState(GAME_STATE.OVER);
          secondsLeft = 0;
        } else {
          secondsLeft = Math.floor(timeLeft / 1000);
        }

        this.uiHandler.timerDisplay.text = secondsLeft;
      }
    }
  }

  updatePointerLine() {
    let graphics = this.pointerLineGraphics;
    let selected = this.selection.selected;
    graphics.clear();

    if (selected.length === 0 || this.selection.loop) return;

    if (selected.length > 0 && !this.selection.loop) {
      graphics.lineStyle(5, DOT_COLORS[this.selection.colorId]._color);
      graphics.beginPath();
      graphics.moveTo(
        selected[selected.length - 1].x,
        selected[selected.length - 1].y
      );
      graphics.lineTo(this.pointer.x, this.pointer.y);
      graphics.strokePath();
    }
  }

  updateSelectedLines() {
    let selected = this.selection.selected;
    let graphics = this.selectedLinesGraphics;

    graphics.clear();

    if (selected.length > 1) {
      graphics.lineStyle(5, DOT_COLORS[this.selection.colorId]._color);
      graphics.beginPath();
      graphics.moveTo(selected[0].x, selected[0].y);
      for (let i = 1; i < selected.length; i++) {
        graphics.lineTo(selected[i].x, selected[i].y);
      }
      graphics.strokePath();
    }
  }

  updateColorOverlay() {
    let colorOverlay = this.uiHandler.colorOverlay;

    if (this.selection.loop) {
      colorOverlay.fillColor = DOT_COLORS[this.selection.colorId]._color;
      colorOverlay.setVisible(true);
    } else {
      colorOverlay.setVisible(false);
    }
  }

  addDotEffect(x, y, colorId) {
    let dotEffect = this.dotEffectGroup.get(x, y);

    if (!dotEffect) {
      console.error('No DotEffect available!');
      return null;
    }
    dotEffect.dotScale = this.dotGrid.dotScale;
    dotEffect.setColorId(colorId);
    dotEffect.spawn();
  }
}
