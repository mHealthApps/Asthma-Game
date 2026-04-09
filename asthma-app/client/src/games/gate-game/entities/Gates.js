import { Container, Graphics, Sprite, Assets, Text } from 'pixi.js';

class Gate {
    constructor(x, size, text, image) {
        this.size = size;

        this.view = new Container();
        this.view.x = x;

        this.gateSprite = new Sprite(image);
        this.gateSprite.anchor.set(0.5);
        this.gateSprite.width = size * 0.75;

        this.gateText = new Text({
            text: text,
            style: {
                fill: '#ffffff',
                fontSize: 24,
                fontFamily: 'sans-serif',
            },
            anchor: 0.5,
            x: 0,
            y: 0
        });

        this.view.addChild(this.gateSprite);
        this.view.addChild(this.gateText);
    }
}

export default class Gates {
  constructor(x, y, width, options, changeScore) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.options = options;
    this.changeScore = changeScore;
    this.yVel = 0;
    this.dead = false;

    this.view = new Container();
    this.view.x = x;
    this.view.y = y;

    this.generateGates();
  }

  generateGates() {
    this.gates = [];
    for (let i = 0; i < this.options.length; i++) {
        const gate = new Gate((-1 + (2 * (i + 0.5)) / this.options.length) * (this.width / 2), this.width / this.options.length, this.options[i].text, this.options[i].image);
        console.log(gate);
        this.gates.push(gate);
        this.view.addChild(gate.view);
    }
  }

  update (appHeight) {
    if (this.wait > 0) {
      this.wait--;
    } else {
      // this.yVel += appHeight / 17000;
      this.y += 5;
      if (this.y > appHeight + 30) {
        // Resets objects position at the top of the screen and randomly sets a random type
      }
      if (!this.dead) {
        this.view.x = this.x;
        this.view.y = this.y;
      }
    }
  }

  tempDie () {
    this.dead = true;
    this.view.visible = false;
  }
}
