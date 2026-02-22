import { Container, Graphics } from 'pixi.js';
const objectTypes = [
  { 
    points: 10,
    color: 0xffffff
  },
  {
    points: -10,
    color: 0xee0000
  }
]

export default class FallingObject {
  constructor(x, y, wait, changeScore) {
    this.x = x;
    this.y = y;
    this.yVel = 0;
    this.wait = wait;
    this.dead = false;
    this.type = objectTypes[Math.floor(Math.random() * 1.5)];

    this.view = new Container();
    this.view.x = x;
    this.view.y = y;

    this.circle = new Graphics();
    this.draw = function() {
      this.circle.circle(0, 0, 30);
      this.circle.fill(this.type.color);
    }
    this.draw();

    // Enable interaction
    this.circle.eventMode = 'static';
    this.circle.cursor = 'pointer';

    this.circle.on('pointerdown', () => {
      // console.log(this.type);
      changeScore(this.type.points);
      this.tempDie();
    });

    this.view.addChild(this.circle);
  }

  update (appWidth, appHeight) {
    if (this.wait > 0) {
      this.wait--;
    } else {
      this.yVel += appHeight / 17000;
      this.y += this.yVel;
      if (this.y > appHeight + 30) {
        // Resets objects position at the top of the screen and randomly sets a random type
        this.x = Math.random() * (appWidth - 60) + 30;
        this.y = -60;
        this.dead = false;
        this.view.visible = true;
        this.yVel = 0;
        this.type = objectTypes[Math.floor(Math.random() * 1.5)];
        this.circle.clear();
        this.draw();
      }
      if (!this.dead) {
        this.view.x = this.x;
        this.view.y = this.y;
      }
    }
  }

  tempDie () {
    // console.log("FallingObject destroyed");
    this.dead = true;
    this.view.visible = false;
  }
}
