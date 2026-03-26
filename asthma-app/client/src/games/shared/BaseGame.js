import { Application, Container } from "pixi.js";

// Base class which contains each Pixi games basic structure that React will interact with
export class BaseGame {
    constructor({ container, events }) {
        this.container = container;
        this.events = events;
    }

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

            this.run();
    }

    run() {
        throw new Error("run() not implemented");
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
