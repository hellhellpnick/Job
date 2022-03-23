import Phaser from 'phaser';
import BootScene from './scripts/scenes/BootScene';
import PreloadScene from './scripts/scenes/PreloadScene';
import GameTimeScene from './scripts/scenes/GameTimeScene';
import GameInfinitScene from './scripts/scenes/GameInfinitScene';
import GameMoveScene from './scripts/scenes/GameMoveScene';
import StartScene from './scripts/scenes/StartScene';

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [
    BootScene,
    PreloadScene,
    StartScene,
    GameTimeScene,
    GameInfinitScene,
    GameMoveScene,
  ],
};

const game = new Phaser.Game(config);
