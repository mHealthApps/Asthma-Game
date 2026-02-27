import { Application, Container } from 'pixi.js';
import { BaseGame } from '../shared/BaseGame';
import { GameScene } from '../demo-game/scenes/GameScene';
import { WinScene } from '../demo-game/scenes/WinScene';

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

        // Set the initial scene
        this.setScene(new GameScene(this.app));        


        this.completionTime = 0;
        // Listen for animate update
        this.app.ticker.add((time) => {
            this.completionTime += time.elapsedMS;
            if (this.currentScene) {
                this.currentScene.update();
                if (this.currentScene.score && this.currentScene.score >= 30) {
                    console.log(this.completionTime);
                    this.setScene(new WinScene(this.app, this.completionTime));
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
