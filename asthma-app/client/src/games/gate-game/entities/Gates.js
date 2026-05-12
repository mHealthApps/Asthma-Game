import { Container, Sprite, Texture, Text } from 'pixi.js';

class Gate {
    constructor(x, size, text, image, index, correctIndex, changeScore, playerX, setTimeout, resetQuestion, numGates) {
        this.x = x;
        this.size = size;
        this.index = index;
        this.correctIndex = correctIndex;
        this.changeScore = changeScore;
        this.playerX = playerX;
        this.setTimeout = setTimeout;
        this.resetQuestion = resetQuestion;
        this.numGates = numGates;
        this.isDestroyed = false;

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

        console.log(text.length);
        this.gateText = new Text({
            text: text,
            style: {
                fill: '#ffffff',
                fontSize: size * 0.1,
                fontFamily: 'sans-serif',
                wordWrap: true,
                wordWrapWidth: size * 0.8,
            },
            anchor: 0.5,
            x: 0,
            y: (text.length < 45) ? size / 2 : size * 0.65
        });

        this.view.addChild(this.gateSprite);
        this.view.addChild(this.gateText);
        this.view.alpha = 0.8;
        this.depthPosition(1024);
        // console.log(this.view.y);
    }

    update(appWidth, appHeight) {
      if (!this.isDestroyed) {
        this.depthPosition(appHeight);

        // Change depth, move the gates closer
        if (this.z > 1) {
          this.z -= this.baseSpeed * appHeight * this.scale;
          // collision logic
          if (this.z < 1.65 && this.view.visible && this.playerX(this.numGates) !== null && this.playerX(this.numGates) === this.index) {
            this.view.visible = false;
            this.changeScore((this.index === this.correctIndex) ? 10 : -10);
            this.setTimeout();
          }
        } else if (this.view.visible) {
          // reset logic
          // console.log(this.view.y);
          this.view.visible = false;
          console.log('gate done');
          this.resetQuestion();
        }
      }
    }

    depthPosition(appHeight) {
      // Display based on this.z which is depth
      this.scale = 1 / this.z;
      try {
        this.view.scale.set(this.scale);
      } catch (error) {
        console.log(this.view);
        console.log(this.isDestroyed);
      }
      
      // this.view.scale.set(1);
      this.horizonY = -(appHeight * 0.28);

      this.view.x = this.centerX + this.gateX * this.scale;
      this.view.y = this.horizonY + (appHeight - this.horizonY) * this.scale;
      // console.log('gate.z: ' + this.z);
    }

    destroy() {
      this.isDestroyed = true;
      this.view.destroy({
          children: true,
          texture: false,
          baseTexture: false
      });
    }
}

export default class Gates {
  constructor(x, y, width, options, changeScore, playerX, setTimeout, resetQuestion) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.options = options;
    this.changeScore = changeScore;
    this.playerX = playerX;
    this.setTimeout = setTimeout;
    this.resetQuestion = resetQuestion;
    this.yVel = 0;
    this.dead = false;

    this.view = new Container();
    this.view.x = x;
    this.view.y = y;

    this.generateGates();
  }

  generateGates() {
    this.gates = [];
    this.correctIndex = Math.floor(Math.random() * this.options.length);
    for (let i = 0; i < this.options.length; i++) {
        const index = (this.correctIndex + i) % this.options.length;
        const gate = new Gate((-1 + (2 * (i + 0.5)) / this.options.length) * (this.width / 2), this.width / this.options.length, this.options[index].text, this.options[index].image, i, this.correctIndex, this.changeScore, this.playerX, this.setTimeout, this.resetQuestion, this.options.length);
        // console.log(gate);
        this.gates.push(gate);
        this.view.addChild(gate.view);
    }
  }

  update (appWidth, appHeight) {
    if (this.gates !== null) {
      this.gates.forEach((gate) => {
        gate.update(appWidth, appHeight);
      });
    }
  }

  destroy() {
    this.gates.forEach((gate) => {
      gate.destroy();;
    });
    this.view.destroy({
        children: true,
        texture: false,
        baseTexture: false
    });
  }
}
