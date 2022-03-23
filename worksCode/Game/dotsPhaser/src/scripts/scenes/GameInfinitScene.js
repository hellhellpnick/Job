import GameTimeScene from './GameTimeScene';
import UiHandler from '../classes/UiHandler';

export default class GameInfiniteScene extends GameTimeScene {
  constructor() {
    super('GameInfinite');
  }

  createHandler() {
    this.uiHandler = new UiHandler(this, this.canvas, 1);
  }

  updateCounterDisplay() {
    return false;
  }
}
