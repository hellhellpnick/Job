import { DOT_COLORS, DOT_STATE, touchRadius } from './../constants/Dot';

export default class Dot extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, 'dot');

    let touchCircle = new Phaser.Geom.Circle(64, 64, touchRadius);
    this.setInteractive(touchCircle, Phaser.Geom.Circle.Contains);

    this.animation = 0;
    this.dotScale = 1;
  }

  update() {
    if (this.path && this.animation >= 0) {
      let vec = new Phaser.Math.Vector2();
      this.path.getPoint(this.animation, vec);
      this.setPosition(vec.x, vec.y);
    }
  }

  setGridPosition(position) {
    this.row = position.row;
    this.column = position.column;
  }

  setColorId(colorId) {
    this.colorId = colorId;
    this.setTint(DOT_COLORS[colorId]._color);
  }

  setState(state) {
    this.state = state;
  }

  spawn() {
    this.setState(DOT_STATE.NONE);
    this.setActive(true);
    this.setVisible(true);

    this.scene.tweens.add({
      targets: this,
      scaleX: { from: 0, to: this.dotScale },
      scaleY: { from: 0, to: this.dotScale },
      ease: 'out',
      duration: 300,
    });
  }

  despawn() {
    this.scene.tweens
      .add({
        targets: this,
        scaleX: 0,
        scaleY: 0,
        ease: 'easeIn',
        duration: 100,
      })
      .setCallback(
        'onComplete',
        () => {
          this.group.killAndHide(this);
        },
        []
      );
  }

  startFall(path) {
    this.path = path;
    this.scene.tweens
      .add({
        targets: this,
        animation: { from: 0, to: 1 },
        ease: 'out',
        duration: 700,
      })
      .setCallback(
        'onComplete',
        () => {
          this.animation = -1;
        },
        []
      );
  }
}
