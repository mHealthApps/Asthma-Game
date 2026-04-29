import { BaseScene } from '../../shared/BaseScene';
import FallingObject from '../entities/FallingObject';
import { Assets, Text } from 'pixi.js';


export class GameScene extends BaseScene {
    build() {
        // Initialization of score and text
        this.score = 0;
        this.changeScore = (increment) => {
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
            y: this.app.screen.height - 60
        });
        this.app.renderer.background.color = 0x1099bb;
        this.container.addChild(this.scoreText);

        this.generateFallingObjects();
    }

    async generateFallingObjects() {
        await this.preload();
        await this.pushFallingObjects();
    }

    async pushFallingObjects() {
        // Initialization of the instances of FallingObject
        this.fallingObjects = [];
        for (let i = 0; i < 3; i++) {
            this.fallingObjects.push(new FallingObject(Math.random() * (this.app.screen.width - 60) + 30, -60, i * 120, this.content.objectTypes, this.changeScore));
            this.container.addChild(this.fallingObjects[i].view);
        }
    }

    async preload() {
        // Create an array of asset data to load.
        this.assets = this.content.assets;

        // Load the assets defined above.
        await Assets.load(this.assets);
    }
    

    update() {
        // Call the update functions of the fallingObjects
        if (this.fallingObjects && this.fallingObjects.length > 0) {
            for (let i = 0; i < this.fallingObjects.length; i++) {
                if (this.fallingObjects[i]) {
                    this.fallingObjects[i].update(this.app.screen.width, this.app.screen.height);
                }
            }
        }
        
        // Update the text score
        this.scoreText.text = `Score: ${this.score}`;
    }
}