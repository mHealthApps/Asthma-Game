import { Container, Graphics } from 'pixi.js';

export default class PathLine {
    constructor(app, offset) {
        this.app = app;
        this.offset = offset;

        this.view = new Container();

        /* Initializing variables for depth effect */
        this.centerX = 0;
        this.baseSpeed = 0.000015;
        this.z = 4.5;

        this.line = new Graphics();
        this.draw = function() {
            this.line.poly([this.app.screen.width * -0.35, 0, this.app.screen.width * 0.35, 0, this.app.screen.width * 0.36, this.app.screen.height * 0.0314, this.app.screen.width * -0.36, this.app.screen.height * 0.0314]);
            this.line.fill('#E0E0E0');
        }
        this.draw();

        this.view.addChild(this.line);
        this.depthPosition();
        // console.log(this.view.y);
    }

    update() {
      this.depthPosition();

      // Change depth, move the gates closer
      if (this.z > 1) {
        this.z -= this.baseSpeed * this.app.screen.height * this.scale;
      } else if (this.view.visible) {
        // collision logic
        // this.view.visible = false;
      }
      
    }

    depthPosition() {
      // Display based on this.z which is depth
      this.scale = 1 / this.z;
      this.view.scale.set(this.scale * 0.9);
      this.horizonY = 0;
      this.lineX = this.app.screen.width / 2;

      this.view.x = this.lineX;
      this.view.y = this.horizonY + ((this.app.screen.height) - this.horizonY) * this.scale;
      console.log('line.y: ' + this.view.y);
    }
}