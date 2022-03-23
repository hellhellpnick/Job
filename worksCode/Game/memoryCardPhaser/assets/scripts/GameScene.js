class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('bg', 'assets/sprites/background.png');
    this.load.image('card', 'assets/sprites/card.png');

    this.load.image('card1', 'assets/sprites/card1.png');
    this.load.image('card2', 'assets/sprites/card2.png');
    this.load.image('card3', 'assets/sprites/card3.png');
    this.load.image('card4', 'assets/sprites/card4.png');
    this.load.image('card5', 'assets/sprites/card5.png');

    this.load.audio('card', 'assets/sounds/card.mp3');
    this.load.audio('complete', 'assets/sounds/complete.mp3');
    this.load.audio('success', 'assets/sounds/success.mp3');
    this.load.audio('theme', 'assets/sounds/theme.mp3');
    this.load.audio('timeout', 'assets/sounds/timeout.mp3');
  }

  createText() {
    this.timeOutText = this.add.text(10, 330, '', {
      font: '36px CurseCasual',
      fill: '#fff',
    });
  }

  onTimerTick() {
    this.timeOutText.setText('Time:' + this.timeOut);

    if (this.timeOut <= 0) {
      this.timer.paused = true;
      this.restart();
      this.sounds.timeout.play();
    } else {
      --this.timeOut;
    }
  }

  createTimer() {
    this.timer = this.time.addEvent({
      delay: 1000,
      callback: this.onTimerTick,
      callbackScope: this,
      loop: true,
    });
  }

  createSounds() {
    this.sounds = {
      card: this.sound.add('card'),
      complete: this.sound.add('complete'),
      success: this.sound.add('success'),
      theme: this.sound.add('theme'),
      timeout: this.sound.add('timeout'),
    };

    this.sounds.theme.play({ volume: 0.1 });
  }

  create() {
    this.timeOut = config.timeOut;
    this.createSounds();
    this.createTimer();
    this.createBackground();
    this.createText();
    this.createCards();
    this.start();
  }

  restart() {
    let count = 0;
    const onCardMoveComplete = () => {
      ++count;
      if (count >= this.cards.length) {
        this.start();
      }
    };

    this.cards.forEach((card, index) => {
      card.move({
        x: this.sys.game.config.width + card.width,
        y: this.sys.game.config.height + card.height,
        delay: 100 * index,
        callback: onCardMoveComplete,
      });
    });
  }

  start() {
    this.initCardsPositions();
    this.timeOut = config.timeOut;
    this.openCard = null;
    this.openedCardsCound = 0;
    this.timer.paused = false;
    this.initCards();
    this.showCards();
  }

  initCards() {
    const positions = Phaser.Utils.Array.Shuffle(this.positions);

    this.cards.forEach((card) => {
      card.init(positions.pop());
    });
  }

  showCards() {
    this.cards.forEach((card, index) => {
      card.depth = 100 * index;
      card.move({ x: card.position.x, y: card.position.y, delay: 100 * index });
    });
  }

  createBackground() {
    this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
  }

  createCards() {
    this.cards = [];

    config.cards.map((value) => {
      for (let i = 0; i < 2; i++) {
        this.cards.push(new Card(this, value));
      }
    });

    this.input.on('gameobjectdown', this.onCardClicked, this);
  }

  onCardClicked(pointer, card) {
    if (card.opened) {
      return false;
    }

    this.sounds.card.play();

    if (this.openCard) {
      if (this.openCard.value === card.value) {
        this.sounds.success.play();
        this.openCard = null;
        ++this.openedCardsCound;
      } else {
        this.openCard.close();
        this.openCard = card;
      }
    } else {
      this.openCard = card;
    }

    card.open(() => {
      if (this.openedCardsCound === this.cards.length / 2) {
        this.restart();
        this.sounds.complete.play();
        this.timer.paused = true;
      }
    });
  }

  initCardsPositions() {
    const positions = [];
    const cardTexture = this.textures.get('card').getSourceImage();
    const cardWidth = cardTexture.width + 10;
    const cardHeight = cardTexture.height + 10;
    const offsetX =
      (this.sys.game.config.width - cardWidth * config.cols) / 2 +
      cardWidth / 2;
    const offsetY =
      (this.sys.game.config.height - cardHeight * config.rows) / 2 +
      cardHeight / 2;

    for (let rows = 0; rows < config.rows; rows++) {
      for (let col = 0; col < config.cols; col++) {
        positions.push({
          x: offsetX + col * cardWidth,
          y: offsetY + rows * cardHeight,
        });
      }
    }

    this.positions = positions;
  }
}
