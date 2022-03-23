import bgJPG from '../../assets/sprites/bg.jpg';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('bg', bgJPG);
  }

  create() {
    this.scene.start('Preload');
  }
}
