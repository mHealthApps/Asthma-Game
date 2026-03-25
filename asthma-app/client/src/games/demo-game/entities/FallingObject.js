import { Container, Graphics, Sprite, Assets } from 'pixi.js';
import Fruits_34 from '../../../assets/images/34_Fruits.jpg';
import OrgShirt_Girl_Sitting_2Smokers_6 from '../../../assets/images/6_OrgShirt_Girl_Sitting_2Smokers.jpg';
import Smoker_FastFood_Vog_Pollen_7 from '../../../assets/images/7_Smoker_FastFood_Vog_Pollen.jpg';


const objectTypes = [
  { 
    points: 10,
    color: 0xffffff,
    imageIndices: [0]
  },
  {
    points: -10,
    color: 0xee0000,
    imageIndices: [1, 2]
  }
]

const images = [Fruits_34, OrgShirt_Girl_Sitting_2Smokers_6, Smoker_FastFood_Vog_Pollen_7];

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
      this.circle.circle(0, 0, 50);
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
    this.generateSprite();
  }

  async loadTextures () {
    this.textures = await Promise.all(
      images.map(image => Assets.load(image))
    );
  }

  async generateSprite () {
    // Image rendering for the falling objects
    await this.loadTextures();
    this.objectSprite = new Sprite(this.textures[this.type.imageIndices[Math.floor(Math.random() * this.type.imageIndices.length)]]);
    this.objectSprite.anchor.set(0.5);
    /* For image scaling, if using preset images in assets: those are 1500x1500 */
    this.objectSprite.scale.set(0.067);
    this.view.addChild(this.objectSprite);
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
        this.objectSprite.texture = this.textures[this.type.imageIndices[Math.floor(Math.random() * this.type.imageIndices.length)]];
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
