import { BaseScene } from '../../shared/BaseScene';
import FallingObject from '../entities/FallingObject';
import { Text } from 'pixi.js';

export class GameScene extends BaseScene {
    build() {
        // Initialization of score and text
        this.score = 0;
        const changeScore = (increment) => {
            this.score += increment;
        }

        this.scoreText = new Text({
            text: 'Score: 0',
            style: {
                fill: '#ffffff',
                fontSize: 36,
                fontFamily: 'sans-serif',
            },
            anchor: (0, 0),
            x: 20,
            y: this.app.screen.height * 0.78
        });
        this.container.addChild(this.scoreText);

        // Initialization of the instances of FallingObject
        this.fallingObjects = [];
        for (let i = 0; i < 3; i++) {
            this.fallingObjects.push(new FallingObject(Math.random() * (this.app.screen.width - 60) + 30, -60, i * 120, changeScore));
            this.container.addChild(this.fallingObjects[i].view);
        }

    }

    update() {
        // Call the update functions of the fallingObjects
        for (let i = 0; i < this.fallingObjects.length; i++) {
            this.fallingObjects[i].update(this.app.screen.width, this.app.screen.height);
        }
        // Update the text score
        this.scoreText.text = `Score: ${this.score}`;
    }
}