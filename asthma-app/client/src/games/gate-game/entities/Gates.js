import { Container, Sprite, Texture, Text } from 'pixi.js';

class Gate {
    constructor(x, size, text, image) {
        this.size = size;

        this.view = new Container();

        /* Initializing variables for depth effect */
        this.gateX = x;
        this.centerX = 0;
        this.baseSpeed = 0.000015;
        this.z = 4.5;

        this.gateSprite = new Sprite(Texture.from(image));
        this.gateSprite.anchor.set(0.5);
        this.gateSprite.width = size * 0.75;
        this.gateSprite.height = size * 0.75;

        this.gateText = new Text({
            text: text,
            style: {
                fill: '#ffffff',
                fontSize: size * 0.1,
                fontFamily: 'sans-serif',
            },
            anchor: 0.5,
            x: 0,
            y: size / 2
        });

        this.view.addChild(this.gateSprite);
        this.view.addChild(this.gateText);
        this.view.alpha = 0.8;
        this.depthPosition(1024);
        console.log(this.view.y);
    }

    update(appHeight) {
      this.depthPosition(appHeight);

      // Change depth, move the gates closer
      if (this.z > 1) {
        this.z -= this.baseSpeed * appHeight * this.scale;
      } else if (this.view.visible) {
        // collision logic
        console.log(this.view.y);
        this.view.visible = false;
      }
      
    }

    depthPosition(appHeight) {
      // Display based on this.z which is depth
      this.scale = 1 / this.z;
      this.view.scale.set(this.scale);
      this.horizonY = -(appHeight * 0.28);

      this.view.x = this.centerX + this.gateX * this.scale;
      this.view.y = this.horizonY + ((appHeight * 0.85) - this.horizonY) * this.scale;
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
        // console.log(gate);
        this.gates.push(gate);
        this.view.addChild(gate.view);
    }
  }

  update (appHeight) {
    this.gates.forEach((gate) => {
      gate.update(appHeight);
    });
  }

  tempDie () {
    this.dead = true;
    this.view.visible = false;
  }
}
