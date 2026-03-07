import { Container, Graphics, Text } from 'pixi.js';

export default class PixiButton {
  constructor(x, y, size, text, onClick) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.text = text;
    this.scale = 1.0;
    this.mouseHover = false;

    this.view = new Container();
    this.view.x = x;
    this.view.y = y;

    this.button = new Graphics();
    this.draw = function() {
      this.button.roundRect(-(this.size / 2), -(this.size / 4.3 / 2), this.size, this.size / 4.3, 20);
      this.button.fill(0xfa4b0a);
    }
    this.draw();

    this.buttonText = new Text({
        text: this.text,
        style: {
            fill: '#ffffff',
            fontSize: 25,
            fontFamily: 'sans-serif',
        },
        anchor: 0.5,
        x: 0,
        y: 0
    });

    // Enable interaction
    this.button.eventMode = 'static';
    this.button.cursor = 'pointer';

    this.button.on('pointerover', () => {
        this.mouseHover = true;
    });

    this.button.on('pointerout', () => {
        this.mouseHover = false;
    });

    this.button.on('pointerdown', () => {
      onClick();
    });

    this.view.addChild(this.button);
    this.view.addChild(this.buttonText);
  }

  update () {
    if (this.mouseHover && this.scale <= 1.2) {
        this.scale += 0.04;
    } else if (!this.mouseHover && this.scale >= 1.0) {
        this.scale -= 0.04;
    }
    this.view.scale.set(this.scale);
  }

}
