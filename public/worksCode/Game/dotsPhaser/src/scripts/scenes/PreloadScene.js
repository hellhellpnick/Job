import dotPNG from '../../assets/sprites/dot.png';
import bloggerSansBoldTexture from '../../assets/fonts/BloggerSansBold.png';
import bloggerSansTexture from '../../assets/fonts/BloggerSans.png';
import bloggerSansXml from '../../assets/fonts/BloggerSans.fnt';
import bloggerSansBoldXml from '../../assets/fonts/BloggerSansBold.fnt';
import LoadingBar from './../classes/LoadingBar';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.add.sprite(0, 0, 'bg').setOrigin(0);
    this.loadingBar = new LoadingBar(this);
    this.load.image('dot', dotPNG);
    this.load.bitmapFont('bloggerSans', bloggerSansTexture, bloggerSansXml);
    this.load.bitmapFont(
      'bloggerSansBold',
      bloggerSansBoldTexture,
      bloggerSansBoldXml
    );

    this.add
      .text(
        this.sys.game.canvas.width / 2,
        this.sys.game.canvas.height / 2 - 100,
        'Loading...',
        64
      )
      .setOrigin(0.5, 0.5);
  }

  create() {
    this.scene.start('Start');
  }
}
