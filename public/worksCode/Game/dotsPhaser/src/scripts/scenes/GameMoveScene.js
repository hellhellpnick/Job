import GameTimeScene from './GameTimeScene';
import UiHandler from '../classes/UiHandler';
import { DOT_STATE } from '../constants/Dot';
import { GAME_STATE, GAME_CONSTANTS } from '../constants/Game';

export default class GameMoveScene extends GameTimeScene {
  constructor() {
    super('GameMove');
    this.counter = GAME_CONSTANTS.ROUND_MOVE;
  }

  createHandler() {
    this.uiHandler = new UiHandler(this, this.canvas, 3);
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
    this.counterDispaly();
  }

  counterDispaly() {
    if (this.state === GAME_STATE.RUNNING) {
      if (this.counter) {
        --this.counter;

        if (
          GAME_CONSTANTS.ROUND_MOVE >=
          this.counter + GAME_CONSTANTS.ROUND_MOVE
        ) {
          console.log('ok');
          this.setState(GAME_STATE.OVER);
          this.counter = GAME_CONSTANTS.ROUND_MOVE;
        }

        this.uiHandler.timerDisplay.text = this.counter;
      }
    }
  }

  updateCounterDisplay() {
    return false;
  }
}
