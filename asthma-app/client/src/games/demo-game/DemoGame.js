import { Application, Container, Text } from 'pixi.js';
import { BaseGame } from '../shared/BaseGame';
import FallingObject from './entities/FallingObject';

export class DemoGame extends BaseGame {
    async start() {
        // Create a new application
        this.app = new Application();

        // Initialize the application
        await this.app.init({ background: '#1099bb', resizeTo: window });

        // Append the application canvas to the document body
        this.container.appendChild(this.app.canvas);

        // Create and add a container to the stage
        this.mainContainer = new Container();

        this.app.stage.addChild(this.mainContainer);

        // Initialization of score and text
        this.score = 0;
        const changeScore = (increment) => {
            this.score += increment;
        }

        const scoreText = new Text({
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
        this.mainContainer.addChild(scoreText);

        // Initialization of the instances of FallingObject
        const fallingObjects = [];
        for (let i = 0; i < 3; i++) {
            fallingObjects.push(new FallingObject(Math.random() * (this.app.screen.width - 60) + 30, -60, i * 120, changeScore));
            this.mainContainer.addChild(fallingObjects[i].view);
        }


        // Listen for animate update
        this.app.ticker.add(() => {
            // Call the update functions of the fallingObjects
            for (let i = 0; i < fallingObjects.length; i++) {
                fallingObjects[i].update(this.app.screen.width, this.app.screen.height);
            }
            // Update the text score
            scoreText.text = `Score: ${this.score}`;
        });
    }

    destroy() {
        this.app.destroy(true, { container: true });
    }
}
