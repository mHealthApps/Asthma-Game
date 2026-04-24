import { Container, Graphics } from 'pixi.js';

export default class Player {
  constructor(app, changeScore) {
    this.app = app;
    this.changeScore = changeScore;
    this.x = 0;

    this.view = new Container();
    this.view.x = app.screen.width / 2;
    this.view.y = app.screen.height * 0.8;


    /* TODO: add more complicated graphics */
    this.circle = new Graphics();
    this.draw = function() {
      this.circle.circle(0, 0, 50);
      this.circle.fill('white');
    }
    this.draw();

    this.view.addChild(this.circle);
  }

  update () {
    
  }
}