import { Application, Container } from 'pixi.js';
import { BaseGame } from '../shared/BaseGame';
import { InstructionScene } from './scenes/InstructionScene'
import { GameScene } from './scenes/GameScene';
import { WinScene } from './scenes/WinScene';

/*  
Events used in this game:
setScore(score): score recorded at the end of the game
uponCompletion(): called at the end of the game for completion
updateStorage(): called when you win the game to update module completion
*/

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

        this.playGame = () => {
            this.setScene(new GameScene(this.app));
        }
        // Set the initial scene
        this.setScene(new InstructionScene(this.app, this.playGame));


        this.completionTime = 0;
        // Listen for animate update
        this.app.ticker.add((time) => {
            if (this.currentScene) {
                this.currentScene.update();
                if (this.currentScene.score) {
                    this.completionTime += time.elapsedMS;
                    // detects winning the game in the game scene
                    if (this.currentScene.score >= 30) {
                        // console.log(this.completionTime);
                        this.events.setScore(this.completionTime);
                        this.events.updateStorage();
                        this.setScene(new WinScene(this.app, this.completionTime, this.events.uponCompletion));
                    }
                }
            }
        });
    }

    // Method to change the scene, pass in an instance of a child of BaseScene
    setScene(scene) {
        if (this.currentScene) {
            this.mainContainer.removeChildAt(this.currentScene.container);
            this.currentScene.destroy();
        }

        this.currentScene = scene;
        this.mainContainer.addChild(this.currentScene.container);
    }

    destroy() {
        this.app.destroy(true, { container: true });
    }
}
