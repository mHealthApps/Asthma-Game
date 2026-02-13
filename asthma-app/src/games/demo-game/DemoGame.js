import { Application, Assets, Container, Sprite } from 'pixi.js';
import { BaseGame } from '../shared/BaseGame';

export class DemoGame extends BaseGame {
    async start() {
        // Create a new application
        this.app = new Application();

        // Initialize the application
        await this.app.init({ background: '#1099bb', resizeTo: window });

        // Append the application canvas to the document body
        this.container.appendChild(this.app.canvas);

        // Create and add a container to the stage
        const container = new Container();

        this.app.stage.addChild(container);

        // Load the bunny texture
        const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

        // Create a 5x5 grid of bunnies in the container
        for (let i = 0; i < 25; i++) {
            const bunny = new Sprite(texture);

            bunny.x = (i % 5) * 40;
            bunny.y = Math.floor(i / 5) * 40;
            container.addChild(bunny);
        }

        // Move the container to the center
        container.x = this.app.screen.width / 2;
        container.y = this.app.screen.height / 2;

        // Center the bunny sprites in local container coordinates
        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;
        container.rotation = 0;

        // Listen for animate update
        this.app.ticker.add(() => {
            // Continuously rotate the container!
            // * use delta to create frame-independent transform *
            container.rotation -= 0.01;
        });
    }

    destroy() {
        this.app.destroy(true, { container: true });
    }
}
